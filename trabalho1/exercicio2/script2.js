
function CalturaGrupo(){
   event.preventDefault()
    
      
    var max = Math.max(
        altura1.value,
        altura2.value,
        altura3.value,
        altura4.value,
        altura5.value,
        altura6.value,
        altura7.value,
        altura8.value,
        altura9.value,
        altura10.value,
        altura11.value,
        altura12.value,
        altura13.value,
        altura14.value,
        altura15.value,);

    var min = Math.min(
        altura1.value,
        altura2.value,
        altura3.value,
        altura4.value,
        altura5.value,
        altura6.value,
        altura7.value,
        altura8.value,
        altura9.value,
        altura10.value,
        altura11.value,
        altura12.value,
        altura13.value,
        altura14.value,
        altura15.value,);

    document.write("altura maxima: "+max+"<br>")
    document.write("altura minima: "+min)
}