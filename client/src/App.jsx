import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/data.json")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>

      <h2>Proyek</h2>
      <ul>
        {data.projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong><br />
            {project.description}<br />
            <a href={project.url} target="_blank" rel="noopener noreferrer">Lihat Proyek</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
