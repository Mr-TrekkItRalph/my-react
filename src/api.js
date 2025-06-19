export const BASE_URL = "http://172.17.2.133:8000";

export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/api/students/`);

  const res = await response.json();
  console.log(res);
  return res;
};

export const getGenders = async() => {
  const response = await fetch(`${BASE_URL}/api/gender/`)
  
  const res = await response.json();
  console.log(res)
  return res;
};

export const programToEnroll = async() => {
  const response = await fetch(`${BASE_URL}/api/courses/`)
  
  const res = await response.json();
  console.log(res)
  return res;
};

export const typesOfApplicant = async() => {
  const response = await fetch(`${BASE_URL}/api/enrollmentTypes/`)
  
  const res = await response.json();
  console.log(res)
  return res;
};

export const enrollmentStatus = async() => {
  const response = await fetch(`${BASE_URL}/api/enrollment-status/`)
  
  const res = await response.json();
  console.log(res)
  return res;
};

export const modeOfLearningAPI = async() => {
  const response = await fetch(`${BASE_URL}/api/modeoflearning/`)
  
  const res = await response.json();
  console.log(res)
  return res;
};

export const courseTypesAPI = async() => {
  const response = await fetch(`${BASE_URL}/api/courseTypes/`)
  
  const res = await response.json();
  console.log(res)
  return res;
};