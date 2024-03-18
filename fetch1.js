fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
            }).catch((err)=>{
                console.log('error pada bagian ${err}')
            })