import React, { useEffect } from 'react';
import { ProjectNotFound, StickyDiv } from '../../components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { updateProject } from '../../features/projects/projectsSlice'
import { ShimmerAEIOU } from '../../shimmerui/index'

function AEIOU() {

    const isLoading = useSelector(state => state.projectsReducer.isLoading);
    const projects = useSelector(state => state.projectsReducer.projects);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');

    const project = projects?.find(p => p._id === projectId);
    const dispatch = useDispatch();
    const saveHandler = (e) => {
        dispatch(updateProject(projectId));
    }

    return (
        !isLoading && !project ? (
            <ProjectNotFound />
        ) : (
            !isLoading ? (
                <div className='w-screen flex justify-center items-center flex-col my-10'>
                    {/* // - Canvas */}
                    <div className='h-[700px] w-[1254px] border-2  flex-col box-border'>
                        {/* // - First Row Start*/}
                        <div className='h-[99px] w-[1252px] border-b-[2px] box-border'></div>
                        {/* // - First Row End*/}

                        {/* // - Second Row Start */}
                        <div className='h-[286px] w-[1252px] border-b-[2px] box-border flex'>
                            {/* //! Environment */}
                            <div
                                id='environment'
                                className='h-full w-[33%] border-r-[2px] box-border relative pt-14'
                            >
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='aeiou'
                                    divId='environment'
                                    divName='Environment :'
                                    projectId={projectId}
                                />
                            </div>

                            {/* //! Interaction */}
                            <div
                                id='interaction'
                                className='h-full w-[33%] box-border relative pt-14'
                            >
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='aeiou'
                                    divId='interaction'
                                    divName='Interaction :'
                                    projectId={projectId}
                                />
                            </div>

                            {/* //! Objects */}
                            <div
                                id='objects'
                                className='h-full w-[33%] border-l-[2px] box-border relative pt-14'
                            >
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='aeiou'
                                    divId='objects'
                                    divName='Objects :'
                                    projectId={projectId}
                                />
                            </div>
                        </div>
                        {/* // - Second Row End */}

                        {/* // - Third Row Start */}
                        <div className='h-[310px] w-[1252px] flex'>
                            {/* //! Activity */}
                            <div
                                id='activity'
                                className='h-full w-[50%] border-r-[2px] relative pt-14'
                            >
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='aeiou'
                                    divId='activity'
                                    divName='Activity :'
                                    projectId={projectId}
                                />
                            </div>

                            {/* //! Users */}
                            <div
                                id='users'
                                className='h-full w-[50%] relative pt-14'
                            >
                                <StickyDiv
                                    width='w-[300px]'
                                    height='h-[35px]'
                                    canvasId='aeiou'
                                    divId='users'
                                    divName='Users :'
                                    projectId={projectId}
                                />
                            </div>
                        </div>
                        {/* // - Third Row End */}
                    </div>
                    {/* // - Canvas End */}
                    <button
                        className='w-[70px] h-[70px] text-sm bg-[#1a1a1a] hover:bg-[#444141] text-white absolute top-20 rounded-l-[50%] right-0'
                        onClick={saveHandler}
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className='flex w-screen h-screen justify-center items-center'>
                    <ShimmerAEIOU />
                </div>
            )
        )
    );
}

export default AEIOU;