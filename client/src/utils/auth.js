// Save token to localStorage
export const saveToken = (token) => {
    localStorage.setItem("token", token);
  }
  
  export const getToken = () => {
    return localStorage.getItem("token");
  }
  
  // Remove token from localStorage 
  export const removeToken = () => {
    localStorage.removeItem("token");
  }
  