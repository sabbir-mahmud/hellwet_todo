const generateToken = async (email) => {
  const url = `https://hellwetserver.sabbirmahmud.com/api/auth/`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const token = data.accessToken;
      localStorage.setItem("accessToken", token);
    });
};

export default generateToken;
