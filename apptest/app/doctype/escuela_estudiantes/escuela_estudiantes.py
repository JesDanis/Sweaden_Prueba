# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class escuela_estudiantes(Document):
	def validate(self):
		if len(self.cedula)<10:
			frappe.throw("Dígitos cédula inválida")
	    # def validate(self):
    #     if len(self.nombres)<3:
    #         frappe.throw("Nombre inválido")
