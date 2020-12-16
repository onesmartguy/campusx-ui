const fetchData = async () => await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => ({
    error: false,
    users: res.data,
  }))
  .catch(() => ({
      error: true,
      users: null,
    }),
  );