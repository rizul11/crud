import { useState } from " react";

export default function Temp() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  return (
    <>
      <label>
        First name:
        <input
          type="text"
          value={form.firstName}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm(...{ form, lastName: e.target.value });
          }}
        />
      </label>
      <label>
        
      </label>
    </>
  );
}
