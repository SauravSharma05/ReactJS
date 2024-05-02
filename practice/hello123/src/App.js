import logo from './logo.svg';
import './App.css';
import './try.css';

function App() {
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response)=>{return response.json()})
  .then((data)=>{
//     let test = ` <table border="1">
//     <thead>
//         <tr>
//             <th>Id</th>
//             <th>Title</th>
//             <th>URL</th>
//             <th>THUMBNAILURL</th>
//         </tr>
//     </thead>
//     <tbody>`;
//     data.map((v)=>{
//         console.log(v.id)
//         test = test + `
//         <tr>
//             <td>${v.id}</td>
//             <td>${v.title}</td>
//             <td>
//                 <img src='${v.url}' height='100px'/>
//                 </td>
//             <td>  <img src='${v.thumbnailUrl}' height='100px'/></td>
//         </tr>
        
//         `
//     })
//     document.getElementById('showdata').innerHTML = test + `  </tbody></table>`;
// })
      // data.forEach(value => {
          // console.log(value.id);

          var shw = "";
          const hi = document.getElementById('showdata');
          
          data.forEach((value)=>{

              shw += `
                    <tr>
                    <td>${value.id}</td>
                    <td>${value.title}</td>
                    <td><img src='${value.url}' height='100px'/></td>
                    </tr>
              `
          })
              hi.innerHTML = shw;
      });
  
  return (
    <div className="App">
      <table border='1' id='showdata'></table>
    </div>
  );
}

export default App;
