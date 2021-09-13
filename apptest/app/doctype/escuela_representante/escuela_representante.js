// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('escuela_representante', {
	refresh: function(frm) {

	 },
	 fecha_nacimiento:function(frm){
		calcularEdad(frm.doc.fecha_nacimiento,frm)
	}
});
function calcularEdad(fecha,frm){
	var anios = ( new Date(Date.now()).getFullYear())-(new Date(fecha).getFullYear()) ;
	var meses = ( new Date(Date.now()).getMonth())-(new Date(fecha).getMonth()) ;
	if ((meses < 0 || (meses == 0 && ( new Date(Date.now()).getDate()) < (new Date(fecha).getDate()))))
		{
		anios--
	 	 }
	if(anios<18){
		alert("Representante debe ser mayor de edad")
	}
}