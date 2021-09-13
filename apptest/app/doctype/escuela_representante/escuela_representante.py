# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class escuela_representante(Document):
	def validate(self):
		if len(self.cedula)<10:
			frappe.throw("Dígitos cédula inválida")
		if "@" not in self.correo:
			frappe.throw("Correo electrónico inválido")
		if "." not in self.correo:
			frappe.throw("Correo electrónico inválido")
		if len(self.telefono)!=10:
			frappe.throw("Teléfono inválido")
		