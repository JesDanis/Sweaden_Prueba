// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('repaso_factura', {
	 refresh: function(frm) {

	 },
	 cedula:function(frm){
		cliente(frm.doc.cedula,frm)
	}
});
frappe.ui.form.on("repaso_detalle", { 
	valor:function(frm, cdt, cdn){ 
		var d = locals[cdt][cdn]; 
		frappe.model.set_value(d.doctype, d.name, "total", d.cantidad * d.valor); 
		var st = 0; 
		frm.doc.factura.forEach(function(d) { st += d.total; }); 
		frm.set_value("subtotal", st); 
		refresh_field("subtotal");
		var i=Math.round((st*0.12) * 100) / 100;
		frm.set_value("iva", i); 
		refresh_field("iva");
		var t=st+i;
		frm.set_value("total_f", t); 
		refresh_field("total_f");
	}		
	});
function cliente(cedula,frm){
	frappe.model.get_value('repaso_clientes', {'cedula': cedula}, ['nombres','apellidos','direccion','telefono'],
  function(d) {
	frm.doc.nombres=d.nombres;
	frm.refresh_field("nombres")
	frm.refresh_field("apellidos")
	frm.doc.direccion=d.direccion
	frm.refresh_field("direccion")
	frm.doc.telefono=d.telefono
	frm.refresh_field("telefono")
	frm.refresh_field("cedula")
  })
}