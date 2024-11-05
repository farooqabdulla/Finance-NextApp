"use client";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          "https://api.plefigos.com/plefigos/v1/career/getAllJobs",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();

        if (data.success) {
          setJobs(data.result);
        } else {
          setError("Failed to load jobs.");
        }
      } catch (error) {
        setError("An error occurred while fetching jobs.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="job-listings">
      <h1>Job Openings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.job_id} className="job-item">
            <h2>{job.job_title}</h2>
            <h3>{job.job_subtitle}</h3>
            <p>Type: {job.job_type}</p>
            <p>Openings: {job.no_of_openings}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
