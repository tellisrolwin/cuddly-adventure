import React from "react";
import KenImg1 from "./Ken.jpeg";

export default function TabHW() {
  const tableData = [
    [
      1,
      "John Doe",
      "Software Engineer",
      "IT Department",
      ["HTML", "CSS", "JS", "React", "PHP", "MySQL", "Express", "MongoDB"],
      "967543210",
      "john@gmail.com",
      "Mangalore",
    ],
    [
      2,
      "Sarah Smith",
      "Data Scientist",
      "Business Intelligence",
      ["Python", "SQL", "Tableau"],
      "967543210",
      "sarah@gmail.com",
      "Banglore",
    ],
    [
      3,
      "Ryan Kim",
      "Product Manager",
      "Marketing",
      ["Excel", "Powerpoint"],
      "967543210",
      "ryan@gmail.com",
      "Delhi",
    ],
    [
      4,
      "Oliver Holmes",
      "UI Designer",
      "Design",
      ["Figma", "Sketch"],
      "967543210",
      "oliver@gmail.com",
      "Chennai",
    ],
    [
      5,
      "Emily Davis",
      "Backend Developer",
      "Development",
      ["Java", "Spring Boot"],
      "967543210",
      "emily@gmail.com",
      "Hyderabad",
    ],
  ];
  return (
    <div>
      <style jsx>
        {`
          .myTable td,
          .myTable th {
            border: 2px solid black;
            padding: 10px;
          }
          .mainTabDiv {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div className="mainTabDiv">
        <table className="myTable" align="center" border="1">
          <thead>
            <th colspan="8" bgcolor="pink">
              Employee Info
            </th>
          </thead>
          <thead bgcolor="aquamarine">
            <th width="60">Sl No</th>
            <th width="200">Profile</th>
            <th width="160">Designation</th>
            <th width="180">Department</th>
            <th width="150">Skills</th>
            <th colSpan="2" width="400">
              Contacts
            </th>
            <th width="80">Address</th>
          </thead>
          <tbody>
            {tableData.map((row) => {
              const [
                slNo,
                profile,
                designation,
                department,
                skills,
                email,
                phone,
                address,
              ] = row;

              return (
                <tr key={slNo}>
                  <td bgcolor="skyblue">{slNo}</td>
                  <td>
                    <img
                      src={KenImg1}
                      height="50"
                      align="left"
                      style={{ borderRadius: "50%" }}
                    ></img>
                    <p align="center">{profile}</p>
                  </td>
                  <td align="left">{designation}</td>
                  <td align="left">{department}</td>
                  <td align="left">
                    <ul style={{ listStyle: "disc", margin: 0 }}>
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </td>
                  <td align="left">{email}</td>
                  <td align="left">{phone}</td>
                  <td align="left">{address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
