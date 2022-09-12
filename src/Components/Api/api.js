export const formSubmit = (data) => {
  //console.log(data);
  return fetch("http://localhost:5000/page-8", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};
