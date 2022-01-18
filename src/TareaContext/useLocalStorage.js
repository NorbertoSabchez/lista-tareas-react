import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect( () => {
      setTimeout( () => {
        try{
          const localstorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localstorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localstorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        } catch (errror) {
            setError(error);
        }
      }, 1000);
  
    })
    
  
    const saveItem = (nuevaItem) => {
      try{
        const stringifiedItem = JSON.stringify(nuevaItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(nuevaItem);
      }catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }


  export {useLocalStorage};