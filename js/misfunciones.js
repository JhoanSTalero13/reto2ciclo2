function leerClientes(){
    //FUNCION GET
        $.ajax({    
            url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'GET',
            dataType : 'json',
    
            success : function(clientes) {
                   let cs=clientes.items;
                   $("#listaClientes").empty();
                   for(i=0;i<cs.length;i++){
                       $("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
                       $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
                   
                   }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
        });
    }
    
    
    function guardarCliente() {
        let idCliente=$("#idCliente").val();
        let nombre=$("#nombreCliente").val();
        let mailCliente=$("#mailCliente").val();
        let edad=$("#edadCliente").val();
    
        let data={
            id:idCliente,
            name:nombre,
            email:mailCliente,
            age:edad
        };
    
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
    
    
        $.ajax({    
            url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'POST',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                   $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#mailCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    
    }
    
    
    function editarCliente(){
        let idCliente=$("#idCliente").val();
        let nombre=$("#nombreCliente").val();
        let mailCliente=$("#mailCliente").val();
        let edad=$("#edadCliente").val();
    
        let data={
            id:idCliente,
            name:nombre,
            email:mailCliente,
            age:edad
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'PUT',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                   $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#mailCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    }
    
    function borrarCliente(idCliente){
        let data={
            id:idCliente
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'DELETE',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                   $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#mailCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    }
    
    function leerCabana(){
        //FUNCION GET
            $.ajax({    
                url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
                type : 'GET',
                dataType : 'json',
        
                success : function(cabana) {
                       let cs=cabana.items;
                       $("#listaCabana").empty();
                       for(i=0;i<cs.length;i++){
                           $("#listaCabana").append(cs[i].id+" <b>"+cs[i].brand+"</b> "+cs[i].rooms+" "+cs[i].category_id +" "+cs[i].name);
                           $("#listaCabana").append("<button onclick='borrarCabana("+cs[i].id+")'>Borrar</button><br>");
                       
                       }
                },
                error : function(xhr, status) {
                    alert('ha sucedido un problema');
                }
            });
        }
    
        function guardarCabana() {
            let idCabana=$("#idCabana").val();
            let sucursal=$("#sucursalCabana").val();
            let numero=$("#numeroCabana").val();
            let categoria=$("#categoriaCabana").val();
            let nombre=$("#nombreCabana").val();
        
            let data={
     
                id:idCabana,
                brand: sucursal,
                rooms:numero,
                category_id:categoria,
                name:nombre,
            };
        
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
        
        
            $.ajax({    
                url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
                type : 'POST',
             //   dataType : 'json',
                data:dataToSend,
                contentType:'application/json',
                success : function(pepito) {
                    $("#idCabana").val("");
                    $("#sucursalCabana").val("");
                    $("#numeroCabana").val("");
                    $("#categoriaCabana").val("");
                    $("#nombreCabana").val("");
                },
                error : function(xhr, status) {
               //     alert('ha sucedido un problema');
                },
                complete: function(){
                    leerCabana();
                }
            });
        
        
        }
        function editarCabana(){
            let idCabana=$("#idCabana").val();
            let sucursal=$("#sucursalCabana").val();
            let numero=$("#numeroCabana").val();
            let categoria=$("#categoriaCabana").val();
            let nombre=$("#nombreCabana").val();
        
            let data={
                id:idCabana,
                brand: sucursal,
                rooms:numero,
                category_id:categoria,
                name:nombre,
            };
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
            $.ajax({    
                url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
                type : 'PUT',
             //   dataType : 'json',
                data:dataToSend,
                contentType:'application/json',
                success : function(pepito) {
                    $("#idCabana").val("");
                    $("#sucursalCabana").val("");
                    $("#numeroCabana").val("");
                    $("#categoriaCabana").val("");
                    $("#nombreCabana").val("");
                },
                error : function(xhr, status) {
               //     alert('ha sucedido un problema');
                },
                complete: function(){
                    leerCabana();
                }
            });
        
        }
        
        function borrarCabana(idCabana){
            let data={
                id:idCabana
            };
            let dataToSend=JSON.stringify(data);
            //console.log(dataToSend);
            $.ajax({    
                url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin',
                type : 'DELETE',
             //   dataType : 'json',
                data:dataToSend,
                contentType:'application/json',
                success : function(pepito) {
                    $("#idCabana").val("");
                    $("#sucursalCabana").val("");
                    $("#numeroCabana").val("");
                    $("#categoriaCabana").val("");
                    $("#nombreCabana").val("");
                },
                error : function(xhr, status) {
               //     alert('ha sucedido un problema');
                },
                complete: function(){
                    leerCabana();
                }
            });
        
        }
    
        function leerMensaje(){
            //FUNCION GET
                $.ajax({    
                    url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                    type : 'GET',
                    dataType : 'json',
            
                    success : function(memsaje) {
                           let cs=memsaje.items;
                           $("#listaMensaje").empty();
                           for(i=0;i<cs.length;i++){
                               $("#listaMensaje").append(cs[i].id+" <b>"+cs[i].messagetext+"</b> ");
                               $("#listaMensaje").append("<button onclick='borrarMensaje("+cs[i].id+")'>Borrar</button><br>");
                           
                           }
                    },
                    error : function(xhr, status) {
                        alert('ha sucedido un problema');
                    }
                });
            }
        
    
        function guardarMensaje() {
                let idmensaje=$("#idMensaje").val();
                let mensaje=$("#mensaje").val();
                
                let data={
                    id:idmensaje,
                    messagetext:mensaje,
                    
                };
            
                let dataToSend=JSON.stringify(data);
                //console.log(dataToSend);
            
            
                $.ajax({    
                    url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                    type : 'POST',
                 //   dataType : 'json',
                    data:dataToSend,
                    contentType:'application/json',
                    success : function(pepito) {
                        $("#idMensaje").val("");
                        $("#mensaje").val("");
                        
                    },
                    error : function(xhr, status) {
                   //     alert('ha sucedido un problema');
                    },
                    complete: function(){
                        leerMensaje();
                    }
                });
            
            
            }
            
            
            function editarMensaje(){
                let idmensaje=$("#idMensaje").val();
                let mensaje=$("#mensaje").val();
            
                let data={
                    id:idmensaje,
                    messagetext:mensaje,
                };
                let dataToSend=JSON.stringify(data);
                //console.log(dataToSend);
                $.ajax({    
                    url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                    type : 'PUT',
                 //   dataType : 'json',
                    data:dataToSend,
                    contentType:'application/json',
                    success : function(pepito) {
                        $("#idMensaje").val("");
                        $("#mensaje").val("");
                    },
                    error : function(xhr, status) {
                   //     alert('ha sucedido un problema');
                    },
                    complete: function(){
                        leerMensaje();
                    }
                });
            
            }
            
            function borrarMensaje(idmensaje){
                let data={
                    id:idmensaje
                };
                let dataToSend=JSON.stringify(data);
                //console.log(dataToSend);
                $.ajax({    
                    url : 'https://g2e4d2519403b08-reto15ciclo3g14.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                    type : 'DELETE',
                 //   dataType : 'json',
                    data:dataToSend,
                    contentType:'application/json',
                    success : function(pepito) {
                        $("#idMensaje").val("");
                        $("#mensaje").val("");
                    },
                    error : function(xhr, status) {
                   //     alert('ha sucedido un problema');
                    },
                    complete: function(){
                        leerMensaje();
                    }
                });
            
            }



