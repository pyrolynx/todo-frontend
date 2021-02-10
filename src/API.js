function API(url) {
    this.fetchToDo = () => {
      return fetch(url + "/todo/")
      .then(response => response.json())
      .then(result => {return result});
    };

    this.addToDo = (todo) => {
      return fetch(url + "/todo/", {
        method: "POST",
        body: JSON.stringify(todo),
      }).then((response) => {if (response.status != 201) {throw Error()} else return response})
    };

    this.modifyToDo = (todo) => {
      return fetch(url + "/todo/", {
        method: "PATCH",
        body: JSON.stringify(todo),
      }).then((response) => {if (response.status != 202) {throw Error()} else return response})
    };

    this.deleteToDos = () => {
      return fetch(url + "/todo/", {
        method: "DELETE",
      }).then((response) => {if (response.status != 204) throw Error()})
    };
  }


export default API;