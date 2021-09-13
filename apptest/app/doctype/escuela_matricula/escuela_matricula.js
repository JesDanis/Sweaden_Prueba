// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('escuela_matricula', {
	refresh: function(frm) {

	 },
	 representante: function(frm){
		 representanteV(frm.doc.representante,frm)
	 }
});
frappe.ui.form.on("escuela_detalle", { 
	alumno:function(frm, cdt, cdn){ 
		var d = locals[cdt][cdn]; 
		var h = 0; 
		frm.doc.matricula.forEach(function(d) { h += 1; }); 
		frm.set_value("hijos", h); 
		refresh_field("hijos");
		var precio=60.50;
		frm.set_value("precio", precio); 
		var p=precio*h;
		frm.set_value("pagar", p); 
		refresh_field("pagar");
		var tp=0;
		var ds=0
		if (h==2){
			ds=10;
			tp=p-(p*(ds/100));
		}else if(h>2){
			ds=20;
			tp=p-(p*(ds/100));
		}else{
			ds=0;
			tp=p
		}
		frm.set_value("descuento", ds+"%");
		refresh_field("descuento");
		frm.set_value("total", tp);
		refresh_field("total");
	}		
	});
	function representanteV(cedula,frm){
		frappe.model.get_value('escuela_representante', {'cedula': cedula}, ['nombres','apellidos'],
	  function(d) {
		frm.doc.nombres=(d.nombres+' ' +d.apellidos)
		frm.refresh_field("nombres")
	  })
	}