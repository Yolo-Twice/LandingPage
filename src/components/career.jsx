import { useState } from "react";
import { careers } from "../data/careers";

export default function Career() {
  const [selectedDept, setSelectedDept] = useState("");
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleDeptChange = (e) => {
    const deptName = e.target.value;
    setSelectedDept(deptName);
    const dept = careers.find((item) => item.name === deptName);
    if (dept) {
      setRoles(dept.data);
      setSelectedRole(null);
    } else {
      setRoles([]);
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="relative h-[40vh]">
        <img
          src="images/banner.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover object-[center_70%] z-0"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 h-full flex items-start justify-start p-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl">
            Careers at LogiXJunction
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 bg-lxj-softWhite min-h-screen flex flex-col max-w-7xl mx-auto font-inter">

        {/* Intro */}
        {/* Intro */}
<div className="bg-blue-200 p-6 rounded-2xl shadow-md text-gray-800 text-lg leading-relaxed mb-10">
  <div className="columns-1 md:columns-2 gap-6 space-y-4">
    <p>
      At LogiXjunction, every team is essential to transforming India’s freight logistics ecosystem.
      Whether in operations, technology, marketing, customer support, or strategy — our people work
      together to make logistics smarter, more efficient, and more transparent across the country.
    </p>
    <p>
      Joining LogiXjunction means becoming part of a fast-moving, mission-driven company where your
      contributions directly shape the future of freight in India. No matter your role, you’ll be
      empowered to drive meaningful change in one of the nation’s most vital industries.
    </p>
  </div>
</div>


        {/* Dropdowns */}
        <form className="flex flex-col items-center gap-4 mx-auto">
          <select
            className="px-4 py-3 w-[30vh] text-center border border-blue-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-150 ease-in-out bg-blue-200 text-gray-900"
            onChange={handleDeptChange}
            value={selectedDept}
          >
            <option value="">Select a department</option>
            {careers.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>

          {roles.length > 0 && (
            <select
              className="px-4 py-3 w-[30vh] text-center border border-blue-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-150 ease-in-out bg-blue-200 text-gray-900"
              onChange={(e) => {
                const roleName = e.target.value;
                const role = roles.find((r) => r.name === roleName);
                setSelectedRole(role);
              }}
            >
              <option value="">Select a role</option>
              {roles.map((role, idx) => (
                <option key={idx} value={role.name}>
                  {role.name}
                </option>
              ))}
            </select>
          )}
        </form>

        {/* Role Info Card */}
        {selectedRole && (
          <div className="mt-12 p-8 bg-blue-200/90 rounded-2xl shadow-xl border border-blue-300">
            <h2 className="text-3xl font-bold text-lxj-primary mb-4">{selectedRole.name}</h2>

            <div className="space-y-3 mb-6 text-gray-800 text-base">
              {selectedRole.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-lxj-alert mb-3">Roles & Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-900 space-y-2 text-[1.05rem]">
              {selectedRole.role.map((item, index) => (
                <li key={index} className="pl-1">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
