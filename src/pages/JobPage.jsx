import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Spinners from '../components/Spinners';

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();
    // useParams
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);
    // 
    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             setJob(data);
    //         } catch (error) {
    //             console.log('Error fetching data from job page', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchJob();
    // }, []);
    return (
        // loading ? <Spinners /> : (
        //     <h1>{job.title}</h1>
        // )
            <h1>{job.title}</h1>
    )
}

// Data Loaders to get a job by it's ID
// in app.jsx, can import jobLoader
// much more simple and cleaner and can be used every where else
// don't have use useState and useEffect for pages that want to use the job json
const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

// export default JobPage;
export {JobPage as default, jobLoader};