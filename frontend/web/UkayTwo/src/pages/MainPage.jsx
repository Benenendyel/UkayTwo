import { useState, useEffect } from "react";

function MainPage() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((res) => res.json())
      .then((res) => setValue(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
      <ul>
        {value.map((mgaTao, index) => (
          <li key={index}>
            {mgaTao.email} {mgaTao.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
