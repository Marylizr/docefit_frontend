const Ejemplo = () => {
  const [productos, setProductos] = useState([]);
  const [refresh, setRefresh] = useState(true); // inicializamos con true para que en la primera carga del useEffect, se realize correctamente la llamada al back.
  
  useEffect(() => {
    
    if(refresh){
      //llamada a la api...
      .then((respuestaProductos) => {
        setProductos([...respuestaProductos]);
        setRefresh(false); 
      })
    }
  }, [refresh]);
  
  
  
  return (
      <>
        ....tu componente de la pagina principal
        <ModalEditar ...las props que necesites setRefresh={setRefresh}/>
      <>
      );
}
        
const ModalEditar = (props) => {
  const {....las props, setRefresh} = props;
  
  
  const handleSubmit = () => {
    //..llamada a la api
    .then(() => {
    setRefresh(true)
    })
  }
  
  return (<>...tu modal<>)
      
}