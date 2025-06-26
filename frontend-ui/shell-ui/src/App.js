import React, { Suspense, useState } from 'react'; // ✅ include useState


const EmployeeApp = React.lazy(() => import('employee/EmployeeApp'));
const ProjectApp = React.lazy(() => import('project/ProjectApp'));

const App = () => {

  const [activeApp, setActiveApp] = useState(null);

  return (
    <div
      style={{
        padding: 20,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #e1f5fe)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ color: '#01579b' }}>🧩 Project And Time Management</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <button
          style={tileStyle}
          onClick={() => setActiveApp('employee')}
        >
          👨‍💼 Employee App
        </button>
        <button
          style={tileStyle}
          onClick={() => setActiveApp('project')}
        >
          🏗️ Project App
        </button>
      </div>
      <Suspense fallback={<p>Loading remote app...</p>}>
        {activeApp === 'employee' && <EmployeeApp />}
        {activeApp === 'project' && <ProjectApp />}
      </Suspense>
    </div>
  );
};

const tileStyle = {
  padding: '30px',
  fontSize: '18px',
  cursor: 'pointer',
  background: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '10px',
};

export default App;
