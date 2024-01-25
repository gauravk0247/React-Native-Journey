 const url = "http://10.0.2.3:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    result = result.json();
    console.warn(result)