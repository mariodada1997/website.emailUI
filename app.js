Ext.application({
    name: 'HelloExt',
    launch: function() {
		Ext.create('Ext.window.Window', {
				title: 'Root [Envío de correos]',
				height: 500,
				width: 600,
				autoShow: true,
				maximized: true,
				maximizable: true,
				items: [
					{
						xtype: "container",
						layout: "hbox",
						items: [
							{
								fieldLabel : "Correo:",
								xtype: 'textfield',
								width: 400
							} ,

							{

								fieldLabel : "Contraseña:",
								xtype: 'textfield',
								width: 400
							},

							{
								xtype: 'checkboxgroup',
						        items: [
						            { boxLabel: 'Recordarme en este equipo', name: 'rb', inputValue: '1' },
						        ]
							}
						]
					},

					{

						fieldLabel : "Asunto:",
						xtype: 'textfield',
						width: 1080,
					},
					
					{
						xtype: "container",
						layout: "hbox",
						items: [
							{
								xtype: "combo",
								fieldLabel: 'Tipo de correo:',
								store: ["Grupo"]
							},

							{
								fieldLabel : "que se enviará a",
								width: 200,
								xtype: 'checkboxgroup',
						        items: [
						            { boxLabel: 'Padres', name: 'rb', inputValue: '1', width: 100},
						            { boxLabel: 'Alumnos', name: 'rb', inputValue: '2', width: 100},
						            { boxLabel: 'Maestros', name: 'rb', inputValue: '2', width: 100},
						        ]

							},

							{
								fieldLabel : "Correos enviados hoy:"
							}
						]
					},
					

					{
						xtype:'fieldset',
				        columnWidth: 0.5,
				        title: 'Para',
				        collapsible: true,
				        defaultType: 'textfield',
				        defaults: {anchor: '100%'},
				        layout: 'anchor',
				        items :[{
				            xtype: "combo",
							fieldLabel: 'Primaria:',
				        }, {
				            xtype: "combo",
							fieldLabel: 'Secundaria:',
				        }, {
				            xtype: "combo",
							fieldLabel: 'Bachillerato:',
				        }]
    				},

    				{
						xtype: 'checkboxgroup',
					    items: [
					        { boxLabel: 'Copias', name: 'rb', inputValue: '1' },
					    ]
					},

					{
						xtype: "htmleditor",
						width: 1080,
    					height: 250
					},

					{
						xtype: "button",
						text: 'Adjuntar',
						icon: "adjunto.png"
					},

					{
						xtype: "button",
						text: 'Enviar',
						icon: "2.png"
					},

					{
						xtype: "button",
						text: 'Guardar Borrador',
						icon: "3.png"
					},

					{
						xtype: "button",
						text: 'Administrar Borradores',
						icon: "4.jpeg"
					},

					{
						xtype: "button",
						text: 'Cancelar',
						icon: "5.jpeg"
					},

					{
						xtype: "button",
						text: 'Ayuda'
					}

				]
	});
    }
});