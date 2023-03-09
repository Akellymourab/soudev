import "./estilo.css";

let cursos =[ 
  'marketing',
  'fullstack',
  'data analytics'
]

export default function App(){
  let nome = "chiquim";
  
  return (
    <div>
    <h1>ola mundo</h1>
    <h2 className="red">digital college</h2>

    <hr/>

    <p>
      bem vindo {nome}
    </p>

    <ul>
      {cursos.map(x => <li>{x}</li>)}
      

    </ul>
    </div>
  )
}