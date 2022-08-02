from django.contrib import admin
from .models import *

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
		list_display = ('name','price','brand','category')
		list_filter = ('name','price')
		search_fields = ('name', 'price')
		# fieldsets = (
        # ('Editar:', {
        #     'fields': ('especie', 'familia', 'regiaopred', 'emailautor', 'aprovado', 'datacriado', 'especie_0', 'custom_field', )
        #     }),
        # )

admin.site.register(Product,ProductAdmin)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
