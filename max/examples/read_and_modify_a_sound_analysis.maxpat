{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 3,
			"revision" : 1,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 34.0, 87.0, 1251.0, 999.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-1",
					"lockeddragscroll" : 0,
					"lockedsize" : 0,
					"maxclass" : "bpatcher",
					"name" : "kp.to_soundworks.maxpat",
					"numinlets" : 2,
					"numoutlets" : 0,
					"offset" : [ 0.0, 0.0 ],
					"patching_rect" : [ 34.905725955963135, 1088.523194322815016, 882.5, 325.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-39",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1054.0, 220.333320617675781, 350.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 28.0, 175.833333333333485, 350.0, 20.0 ],
					"text" : "Open Koryphaios controls and ajust volume before playing!"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-38",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "bang" ],
					"patching_rect" : [ 884.0, 964.0, 29.5, 22.0 ],
					"text" : "b 2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-108",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 884.0, 933.0, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-60",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 884.0, 1029.0, 575.0, 35.0 ],
					"text" : "dictkeys frequency detune velocity duration envelope synthType amModFreq amModDepth fmHarmonicity fmModIndex buffer"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-67",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 884.0, 998.0, 527.0, 22.0 ],
					"text" : "playkeys cents breakpoints velocity duration [slot 1] [slot 10] [slot 3] [slot 4] [slot 6] [slot 7] [slot 8]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-37",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 364.399999999999977, 631.0, 44.0, 22.0 ],
					"text" : "s clear"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-34",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 38.721311569213867, 116.836065292358398, 661.688519477844238, 50.0 ],
					"presentation" : 1,
					"presentation_linecount" : 2,
					"presentation_rect" : [ 28.0, 107.0, 715.0, 36.0 ],
					"text" : "This patch uses cage library objects to read and process a sound analysis. Transformations such as time stretch, transposition, frequency shift and frequency distortion can be directly heard through smartphones and other devices. ",
					"textcolor" : [ 0.501961, 0.501961, 0.501961, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 1,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 393.0, 207.0, 544.0, 380.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "comment",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 143.5, 135.0, 261.0, 20.0 ],
									"text" : "type new values directly in the text object below"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-7",
									"maxclass" : "button",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 113.0, 85.999994666666623, 24.0, 24.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 37.0, 291.0, 59.0, 22.0 ],
									"text" : "route text"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-3",
									"linecount" : 6,
									"maxclass" : "textedit",
									"numinlets" : 1,
									"numoutlets" : 4,
									"outlettype" : [ "", "int", "", "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 37.0, 161.0, 474.0, 110.0 ],
									"text" : "[slotinfo [1 [name \"amplitude envelope\" ] [type function] [range -70. 0.] [representation dB.]] ] [slotinfo [3 [name \"tremolo frequency\" ] [type float] [range 0. 15.]] ] [slotinfo [4 [name \"tremolo depth\" ] [type float] [range 0. 1.]] ] [slotinfo [6 [name \"modulation frequency\" ] [type float] [range 0. 50.]] ] [slotinfo [7 [name \"modulation ratio\" ] [type float] [range 0. 35.] [linkto none]] ] [slotinfo [10 [name \"synth type\" ] [type text]] ] [slotinfo [8 [name buffer] [type text]] ]"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-12",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 37.0, 20.999994666666623, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-13",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 37.0, 330.00001066666664, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"source" : [ "obj-3", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-13", 0 ],
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-3", 0 ],
									"midpoints" : [ 122.5, 120.0, 46.0, 120.0, 46.0, 153.0, 46.5, 153.0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 419.0, 631.0, 93.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 188.109557999999993, 552.833333333333485, 93.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p kproll-settings"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 9.870410775270226,
					"id" : "obj-35",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 499.399999999999977, 257.0, 136.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 277.459487999999965, 268.271451428571481, 140.0, 18.0 ],
					"text" : "apply envelopes to sequence"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 9.840376538498774,
					"id" : "obj-31",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 43.0, 485.0, 122.0, 17.0 ],
					"text" : "or import from OpenMusic"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 519.400000000000091, 631.0, 57.0, 22.0 ],
					"text" : "bgslots 1"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-33",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 578.849999999999909, 631.0, 47.0, 22.0 ],
					"text" : "bgslots"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-25",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 754.083343333333232, 607.0, 38.0, 22.0 ],
					"text" : "r play"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-22",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1000.0, 457.999999999999943, 43.0, 22.0 ],
					"text" : "r reset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-70",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 958.411108339422299, 835.196718215942383, 45.0, 22.0 ],
					"text" : "s reset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 958.411108339422299, 811.196718215942383, 41.0, 22.0 ],
					"text" : "s play"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 958.411108339422299, 787.196718215942383, 41.0, 22.0 ],
					"text" : "s stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 4,
					"outlettype" : [ "bang", "bang", "bang", "" ],
					"patching_rect" : [ 958.411108339422299, 763.196718215942383, 92.0, 22.0 ],
					"text" : "sel 115 113 100"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-40",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 4,
					"outlettype" : [ "int", "int", "int", "int" ],
					"patching_rect" : [ 958.411108339422299, 739.196718215942383, 50.5, 22.0 ],
					"text" : "key"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-36",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 629.5, 607.0, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 127.0, 505.0, 33.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 81.0, 496.0, 33.0, 22.0 ],
					"text" : "read"
				}

			}
, 			{
				"box" : 				{
					"hidden" : 1,
					"id" : "obj-8",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 912.148814523809506, 457.999999999999943, 73.0, 22.0 ],
					"text" : "loadmess 1."
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.294843878043194,
					"id" : "obj-65",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 910.148814523809506, 490.999999999999943, 77.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 61.0, 362.999992499999905, 77.0, 18.0 ],
					"text" : "reset all values"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-61",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 935.648814523809506, 515.0, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 86.5, 380.999992499999905, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-57",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 581.399999999999977, 278.0, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-56",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 499.399999999999977, 237.0, 153.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 218.426253999999972, 232.842880000000093, 153.0, 20.0 ],
					"text" : "add or change envelopes"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-55",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 1,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 84.0, 129.0, 329.0, 194.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-2",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 35.0, 139.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-54",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "bang" ],
									"patching_rect" : [ 35.0, 40.0, 58.0, 22.0 ],
									"text" : "loadbang"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"linecount" : 2,
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 35.0, 80.5, 261.0, 35.0 ],
									"text" : "[slotinfo [1 [type function] [name \"amplitude envelope\" ] [range -70. 6.] [representation dB]]]"
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
									"source" : [ "obj-36", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"source" : [ "obj-54", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 644.399999999999977, 278.0, 60.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p settings"
				}

			}
, 			{
				"box" : 				{
					"bwcompatibility" : 80100,
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-11",
					"maxclass" : "bach.slot",
					"numinlets" : 1,
					"numoutlets" : 3,
					"out" : "nn",
					"outlettype" : [ "", "", "bang" ],
					"patching_rect" : [ 504.399999999999977, 308.0, 200.0, 54.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 224.426253999999972, 306.842880000000036, 196.033233999999993, 86.0 ],
					"textcolor" : [ 0.0, 0.0, 0.0, 0.0 ],
					"versionnumber" : 80100,
					"whole_uislot_data_0000000000" : [ "slot", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1075314688, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "dB", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "temporal", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 2, "[", "name", "slot function", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 3, "[", "name", "slot intlist", "]", "[", "type", "intlist", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 4, "[", "name", "slot floatlist", "]", "[", "type", "floatlist", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 5, "[", "name", "slot int", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 6, "[", "name", "slot float", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 7, "[", "name", "slot text", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 8, "[", "name", "slot filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 9, "[", "name", "slot spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076101120, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 10, "[", "name", "slot llll", "]", "[", "type", "llll", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 20, "[", "name", "dynamics", "]", "[", "type", "dynamics", "]", "[", "key", "d", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 21, "[", "name", "lyrics", "]", "[", "type", "text", "]", "[", "key", "l", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 22, "[", "name", "articulations", "]", "[", "type", "articulations", "]", "[", "key", "A", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 23, "[", "name", "notehead", "]", "[", "type", "notehead", "]", "[", "key", "h", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 24, "[", "name", "annotation", "]", "[", "type", "text", "]", "[", "key", "t", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "]", "[", "slots", "[", 1, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1844408524, 1070202375, "_x_x_x_x_bach_float64_x_x_x_x_", 1448039348, 3224918312, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3208726891, 1071945374, "_x_x_x_x_bach_float64_x_x_x_x_", 1939662648, 3224058318, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "]", "]" ],
					"whole_uislot_data_count" : [ 1 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-50",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 1,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 60.0, 79.0, 501.0, 465.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "bang", "" ],
									"patching_rect" : [ 229.458328333333384, 114.5, 71.5, 22.0 ],
									"text" : "t b l"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-46",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"patching_rect" : [ 281.958328333333384, 188.0, 111.0, 22.0 ],
									"saved_object_attributes" : 									{
										"versionnumber" : 80100
									}
,
									"text" : "bach.keys 1 @out t"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-45",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"patching_rect" : [ 281.958328333333384, 154.0, 107.0, 22.0 ],
									"saved_object_attributes" : 									{
										"versionnumber" : 80100
									}
,
									"text" : "bach.portal @out t"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 229.416656666666768, 324.0, 95.0, 22.0 ],
									"text" : "prepend addslot"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 229.416656666666768, 221.5, 121.0, 22.0 ],
									"text" : "\"amplitude envelope\""
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 229.416656666666768, 256.0, 105.0, 22.0 ],
									"saved_object_attributes" : 									{
										"versionnumber" : 80100
									}
,
									"text" : "bach.join 2 @out t"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 229.416656666666768, 291.0, 113.0, 22.0 ],
									"saved_object_attributes" : 									{
										"versionnumber" : 80100
									}
,
									"text" : "bach.wrap 1 @out t"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-173",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "bang", "", "bang" ],
									"patching_rect" : [ 34.0, 77.0, 409.916656666666768, 22.0 ],
									"text" : "t b l b"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-164",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 34.0, 114.5, 82.0, 22.0 ],
									"text" : "clearselection"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-133",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 424.916656666666768, 114.5, 39.0, 22.0 ],
									"text" : "sel all"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-76",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 33.999969666666743, 29.0, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-158",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 229.458328333333384, 400.0, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-158", 0 ],
									"midpoints" : [ 434.416656666666768, 386.0, 238.958328333333384, 386.0 ],
									"source" : [ "obj-133", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-158", 0 ],
									"source" : [ "obj-164", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-133", 0 ],
									"source" : [ "obj-173", 2 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-164", 0 ],
									"source" : [ "obj-173", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-9", 0 ],
									"source" : [ "obj-173", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-46", 0 ],
									"source" : [ "obj-45", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 1 ],
									"midpoints" : [ 291.458328333333384, 216.0, 360.0, 216.0, 360.0, 250.0, 324.916656666666768, 250.0 ],
									"source" : [ "obj-46", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-173", 0 ],
									"source" : [ "obj-76", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-158", 0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-9", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-45", 0 ],
									"source" : [ "obj-9", 1 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "default_style",
								"newobj" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"button" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
								}
,
								"toggle" : 								{
									"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 1
							}
, 							{
								"name" : "default_style-1",
								"newobj" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"button" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
								}
,
								"toggle" : 								{
									"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "master_style",
								"newobj" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"attrui" : 								{
									"bgcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"button" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 1.0, 0.95051, 0.0, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
								}
,
								"ezadc~" : 								{
									"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
								}
,
								"ezdac~" : 								{
									"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
								}
,
								"function" : 								{
									"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"multislider" : 								{
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"slider" : 								{
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"color" : [ 0.461105, 0.492646, 0.591878, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"toggle" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"message" : 								{
									"bgfillcolor" : 									{
										"angle" : 270.0,
										"autogradient" : 0,
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
										"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
										"proportion" : 0.39,
										"type" : "gradient"
									}
,
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"umenu" : 								{
									"bgfillcolor" : 									{
										"angle" : 270.0,
										"autogradient" : 0,
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
										"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
										"proportion" : 0.39,
										"type" : "gradient"
									}

								}
,
								"gain~" : 								{
									"color" : [ 1.0, 0.861448, 0.16921, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"kslider" : 								{
									"color" : [ 1.0, 1.0, 1.0, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 1
							}
 ]
					}
,
					"patching_rect" : [ 504.399999999999977, 371.0, 118.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p add-amplitude-env"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-41",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 504.399999999999977, 278.0, 49.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 224.426253999999972, 265.842880000000093, 49.0, 22.0 ],
					"text" : "dump 1"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.294843878043194,
					"id" : "obj-20",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 744.449999999999818, 515.0, 33.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 691.449999999999818, 479.999999999999943, 33.0, 18.0 ],
					"text" : "reset"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.294843878043194,
					"id" : "obj-19",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 585.600000000000023, 515.0, 33.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 552.600000000000023, 479.999999999999943, 33.0, 18.0 ],
					"text" : "reset"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.294843878043194,
					"id" : "obj-18",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 426.399999999999977, 515.0, 33.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 411.399999999999977, 479.999999999999943, 33.0, 18.0 ],
					"text" : "reset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 747.199999999999818, 531.0, 29.5, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 694.199999999999818, 496.0, 29.5, 22.0 ],
					"text" : "1."
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-17",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 690.799999999999955, 531.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 637.799999999999955, 496.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-14",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 685.799999999999955, 470.0, 90.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 637.799999999999955, 450.0, 90.0, 20.0 ],
					"text" : "freq distortion"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 426.399999999999977, 531.0, 29.5, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 411.399999999999977, 496.0, 29.5, 22.0 ],
					"text" : "0"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-4",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 364.399999999999977, 470.0, 85.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 353.399999999999977, 450.0, 85.0, 20.0 ],
					"text" : "transposition"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 368.399999999999977, 531.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 353.399999999999977, 496.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-29",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 587.600000000000023, 531.0, 29.5, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 554.600000000000023, 496.0, 29.5, 22.0 ],
					"text" : "0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-28",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 263.599999999999966, 531.0, 29.5, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 262.599999999999966, 496.0, 29.5, 22.0 ],
					"text" : "1."
				}

			}
, 			{
				"box" : 				{
					"attr" : "edit_mode",
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-12",
					"lock" : 1,
					"maxclass" : "attrui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"orientation" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 852.0, 278.0, 80.0, 46.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 516.05118547619054, 265.842880000000093, 80.0, 46.0 ],
					"text_width" : 83.0
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 10.294843878043194,
					"id" : "obj-13",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 261.099999999999966, 515.0, 33.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 260.099999999999966, 479.999999999999943, 33.0, 18.0 ],
					"text" : "reset"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-144",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 629.5, 631.0, 35.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 552.833333333333485, 35.0, 22.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-92",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 789.083333333333258, 631.0, 41.0, 22.0 ],
					"text" : "pause"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 670.583343333333232, 631.0, 39.0, 22.0 ],
					"text" : "dump"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-68",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 754.083343333333232, 631.0, 31.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 112.583343333333232, 552.833333333333485, 31.0, 22.0 ],
					"text" : "play"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 714.583343333333232, 631.0, 34.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 73.0, 552.833333333333485, 34.0, 22.0 ],
					"text" : "write"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-64",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 836.0, 631.0, 31.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 149.5, 552.833333333333485, 31.0, 22.0 ],
					"text" : "stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-63",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 832.0, 607.0, 39.0, 22.0 ],
					"text" : "r stop"
				}

			}
, 			{
				"box" : 				{
					"bgslots" : [ 1 ],
					"breakpointshavenoteheads" : 1,
					"bwcompatibility" : 80100,
					"clefs" : [ "FGG" ],
					"defaultnoteslots" : [ "null" ],
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"grid" : 1,
					"id" : "obj-2",
					"linkannotationtoslot" : 0,
					"linkarticulationstoslot" : 0,
					"linkdynamicstoslot" : 0,
					"linklyricstoslot" : 0,
					"loop" : [ 0.0, 0.0 ],
					"maxclass" : "bach.roll",
					"numinlets" : 6,
					"numoutlets" : 8,
					"numvoices" : 1,
					"out" : "nnnnnnn",
					"outlettype" : [ "", "", "", "", "", "", "", "bang" ],
					"patching_rect" : [ 46.0, 658.833333333333371, 857.0, 246.666666666666657 ],
					"pitcheditrange" : [ "null" ],
					"presentation" : 1,
					"presentation_rect" : [ 31.0, 576.833333333333371, 721.0, 246.666666666666657 ],
					"ruler" : 2,
					"showplayhead" : 1,
					"showvelocity" : 1,
					"stafflines" : [ 5 ],
					"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"tonedivision" : 8,
					"versionnumber" : 80100,
					"voicenames" : [ "[", "]" ],
					"voicespacing" : [ 0.0, 17.0 ],
					"whole_roll_data_0000000000" : [ "roll", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1075314688, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "dB", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 2, "[", "name", "gate", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1074266112, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 3, "[", "name", "tremolo frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076756480, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 4, "[", "name", "tremolo depth", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 5, "[", "name", "control", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 6, "[", "name", "modulation frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078525952, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 7, "[", "name", "modulation ratio", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 8, "[", "name", "filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 9, "[", "name", "spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 39322, 1069128089, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1073217536, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 10, "[", "name", "synth type", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 20, "[", "name", "slot 20", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 21, "[", "name", "slot 21", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 22, "[", "name", "slot 22", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 23, "[", "name", "slot 23", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 24, "[", "name", "slot 24", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "groups", "]", "[", "markers", "]", "[", "midichannels", 1, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3279945731, 1082001112, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2255068442, 1086010087, "_x_x_x_x_bach_float64_x_x_x_x_", 1572863996, 1082444606, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083303765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2832397054, 1086010373, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1962919990, 1086474701, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 481327639, 1086524121, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083783765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3120135694, 1086010325, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2656861149, 1086474681, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1271449544, 1086524100, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1677610141, 1086564543, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1083986432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3480184861, 1086010264, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 576215848, 1086410951, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3462815678, 1086474653, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3654319708, 1086524069, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1078243024, 1086564514, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1084082432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3105654056, 1086010205, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 732155261, 1086410919, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3104838044, 1086474623, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1282203995, 1086524035, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1602379112, 1086564481, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2021654530, 1084183464, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 535287438, 1086010070, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1494361537, 1086410845, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1844552157, 1086474558, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1899766873, 1086523965, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 515743523, 1086564414, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2474639359, 1084323848, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 346882398, 1086009853, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1300299665, 1086410726, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4232862857, 1086474452, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2642010203, 1086523849, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1974155680, 1086564298, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1513912509, 1086654136, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084416341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1943402092, 1086009529, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 853236460, 1086410451, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3020430405, 1086474294, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3270946797, 1086523690, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1673234353, 1086564079, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3578223740, 1086598282, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148410743, 1086653941, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2464569610, 1086677328, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1850707749, 1086698418, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 584359022, 1086735449, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2533359616, 1084550337, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4142179832, 1086009192, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 685202160, 1086316212, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 845542294, 1086410284, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1757514476, 1086474118, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2921007814, 1086523528, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2077385243, 1086563902, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4064478956, 1086598069, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1621402919, 1086653776, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2420258151, 1086677141, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3929701578, 1086698253, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1736736883, 1086735255, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2994733056, 1084666572, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4257198534, 1086008683, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3180243994, 1086315715, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3932302843, 1086410028, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 808847812, 1086473766, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4062254433, 1086523278, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 872266964, 1086563659, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3678209178, 1086597799, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3653300449, 1086653518, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3385776772, 1086676858, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3148991369, 1086698016, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1643322750, 1086734971, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3596386156, 1086766688, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 6626361, 1086794440, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548865, 1084821674, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 214413676, 1086008080, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1296441870, 1086315132, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3411500479, 1086409716, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2188273512, 1086473466, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276405188, 1086522894, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2697309228, 1086563320, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1719041260, 1086597505, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1985212426, 1086627091, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3338110550, 1086653190, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2220662760, 1086676534, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2182806990, 1086716923, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2008139464, 1086734671, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1421666193, 1086766372, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3904365844, 1086794097, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084960341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 902583259, 1086007782, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3875122155, 1086314852, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2437561735, 1086409586, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 765993277, 1086473332, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1327128914, 1086522758, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 45100834, 1086563170, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1555630935, 1086597321, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1813435161, 1086626915, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1287652765, 1086653026, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3993228130, 1086676385, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2266568718, 1086697489, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1955822723, 1086716772, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2602510365, 1086734513, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 745290028, 1086750947, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1412446299, 1086766236, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3827195545, 1086793970, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4240441345, 1085023169, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3188069835, 1086007587, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3659470694, 1086314632, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 144121206, 1086409486, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2414467972, 1086473232, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1611394378, 1086522663, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 83, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3539082373, 1086563059, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3643273214, 1086597220, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 313128363, 1086626783, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3741186731, 1086652937, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3238190081, 1086676283, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2488174211, 1086697402, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1366522755, 1086716678, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 164241603, 1086734413, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2275418596, 1086750839, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 402402569, 1086766118, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4000394381, 1086793850, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085286250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1350362179, 1086007912, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2171633689, 1086314941, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 437242070, 1086409659, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3006190658, 1086473416, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3915917644, 1086522849, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1497346265, 1086563227, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2727852681, 1086597430, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3547967791, 1086653126, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157446149, 1086676459, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1116848704, 1086697564, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3593636804, 1086716856, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4189464077, 1086734585, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1316446270, 1086766338, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3095421100, 1086794040, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2868903936, 1085319493, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4260387140, 1086008267, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3582798396, 1086315329, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1285822804, 1086409874, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3321414206, 1086473588, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2057201398, 1086523031, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3030254096, 1086563512, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2361111533, 1086597610, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148427473, 1086653308, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3727103494, 1086676644, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 344952119, 1086697762, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3733027226, 1086734795, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 459472221, 1086766480, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2761602602, 1086794227, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085347584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 801810412, 1086008571, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 832720799, 1086315545, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1445452888, 1086410009, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4037613007, 1086473725, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 338703794, 1086523246, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 440890128, 1086563652, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 194409856, 1086597763, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1951034082, 1086653429, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 695598379, 1086676798, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4188261335, 1086697923, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 115692050, 1086734939, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1307866405, 1086766662, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085374250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 689843061, 1086008659, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1562919325, 1086315600, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 192437981, 1086410035, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3409812094, 1086473758, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3129161191, 1086523284, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2570799127, 1086563671, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3517616704, 1086597809, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2104869098, 1086653520, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2190279866, 1086676838, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3723136193, 1086734980, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1113679089, 1086766707, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085390250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2178502463, 1086008761, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 722961867, 1086410075, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 503457579, 1086473797, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1803081132, 1086523322, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1017373580, 1086563709, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 873081333, 1086597854, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3760898659, 1086653568, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3528794153, 1086676888, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3468954531, 1086735049, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1996488704, 1085435710, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3851644948, 1086008833, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 989476917, 1086410119, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2986873657, 1086473841, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 89018829, 1086523374, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3894360099, 1086563753, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2738191684, 1086597901, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3977167817, 1086676945, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085462250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4021569939, 1086008955, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157682600, 1086410168, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2323847969, 1086473989, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2705422552, 1086523428, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3592023863, 1086563810, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 659086994, 1086597959, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3108910011, 1086677008, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085507584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3998506500, 1086009123, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 502543187, 1086410252, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4220183720, 1086474078, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3016857675, 1086523514, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276984072, 1086563896, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2885298813, 1086677103, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085590250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1126944945, 1086009312, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 91245062, 1086474176, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1092975327, 1086523606, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1207736957, 1086563993, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2625921563, 1086677181, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2290089984, 1085641405, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 900758502, 1086009467, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1519583510, 1086474252, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 606554684, 1086523681, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2446230958, 1086564073, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3677225053, 1086677280, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085680917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3559484995, 1086009541, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2717081234, 1086474288, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3173461469, 1086523719, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3959717309, 1086564110, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3655769114, 1086677312, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085696917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3179456337, 1086009564, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1941183548, 1086474315, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2481358717, 1086523745, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 77067571, 1086564136, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085723584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 314540864, 1086009622, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3639080681, 1086474329, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2592079872, 1085777027, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3176710950, 1086009587, "_x_x_x_x_bach_float64_x_x_x_x_", 2952790016, 1080090508, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085811584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1443543665, 1086009526, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1082081280, 80, 0, "]", 0, "]", 0, "]" ],
					"whole_roll_data_count" : [ 1 ],
					"zoom" : 76.640625
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-172",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 43.0, 470.0, 51.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 73.0, 450.0, 51.0, 20.0 ],
					"text" : "read llll"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-170",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 46.0, 505.0, 69.0, 22.0 ],
					"text" : "read flute-c"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-169",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 46.0, 531.0, 114.0, 22.0 ],
					"text" : "read trumpet-fsharp"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-147",
					"maxclass" : "newobj",
					"numinlets" : 6,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 8,
							"minor" : 3,
							"revision" : 1,
							"architecture" : "x64",
							"modernui" : 1
						}
,
						"classnamespace" : "box",
						"rect" : [ 245.0, 143.0, 879.0, 590.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 12.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 1,
						"gridsize" : [ 15.0, 15.0 ],
						"gridsnaponopen" : 1,
						"objectsnaponopen" : 1,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"lefttoolbarpinned" : 0,
						"toptoolbarpinned" : 0,
						"righttoolbarpinned" : 0,
						"bottomtoolbarpinned" : 0,
						"toolbars_unpinned_last_save" : 0,
						"tallnewobj" : 0,
						"boxanimatetime" : 200,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"style" : "",
						"subpatcher_template" : "",
						"assistshowspatchername" : 0,
						"boxes" : [ 							{
								"box" : 								{
									"id" : "obj-12",
									"maxclass" : "newobj",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 690.416656666666768, 68.33056640625, 42.0, 22.0 ],
									"text" : "r clear"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-11",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 662.416656666666768, 23.000000406249995, 70.0, 22.0 ],
									"text" : "loadmess 0"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-10",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 135.0, 435.5, 90.0, 22.0 ],
									"text" : "loadmess 6000"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-9",
									"maxclass" : "number",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "bang" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 135.0, 459.5, 50.0, 22.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-8",
									"maxclass" : "newobj",
									"numinlets" : 3,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patcher" : 									{
										"fileversion" : 1,
										"appversion" : 										{
											"major" : 8,
											"minor" : 3,
											"revision" : 1,
											"architecture" : "x64",
											"modernui" : 1
										}
,
										"classnamespace" : "box",
										"rect" : [ 59.0, 104.0, 640.0, 480.0 ],
										"bglocked" : 0,
										"openinpresentation" : 0,
										"default_fontsize" : 12.0,
										"default_fontface" : 0,
										"default_fontname" : "Arial",
										"gridonopen" : 1,
										"gridsize" : [ 15.0, 15.0 ],
										"gridsnaponopen" : 1,
										"objectsnaponopen" : 1,
										"statusbarvisible" : 2,
										"toolbarvisible" : 1,
										"lefttoolbarpinned" : 0,
										"toptoolbarpinned" : 0,
										"righttoolbarpinned" : 0,
										"bottomtoolbarpinned" : 0,
										"toolbars_unpinned_last_save" : 0,
										"tallnewobj" : 0,
										"boxanimatetime" : 200,
										"enablehscroll" : 1,
										"enablevscroll" : 1,
										"devicewidth" : 0.0,
										"description" : "",
										"digest" : "",
										"tags" : "",
										"style" : "",
										"subpatcher_template" : "",
										"assistshowspatchername" : 0,
										"boxes" : [ 											{
												"box" : 												{
													"fontsize" : 18.928428436889931,
													"id" : "obj-125",
													"maxclass" : "newobj",
													"numinlets" : 5,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patcher" : 													{
														"fileversion" : 1,
														"appversion" : 														{
															"major" : 8,
															"minor" : 3,
															"revision" : 1,
															"architecture" : "x64",
															"modernui" : 1
														}
,
														"classnamespace" : "box",
														"rect" : [ 818.0, 305.0, 640.0, 480.0 ],
														"bglocked" : 0,
														"openinpresentation" : 0,
														"default_fontsize" : 12.0,
														"default_fontface" : 0,
														"default_fontname" : "Arial",
														"gridonopen" : 1,
														"gridsize" : [ 15.0, 15.0 ],
														"gridsnaponopen" : 1,
														"objectsnaponopen" : 1,
														"statusbarvisible" : 2,
														"toolbarvisible" : 1,
														"lefttoolbarpinned" : 0,
														"toptoolbarpinned" : 0,
														"righttoolbarpinned" : 0,
														"bottomtoolbarpinned" : 0,
														"toolbars_unpinned_last_save" : 0,
														"tallnewobj" : 0,
														"boxanimatetime" : 200,
														"enablehscroll" : 1,
														"enablevscroll" : 1,
														"devicewidth" : 0.0,
														"description" : "",
														"digest" : "",
														"tags" : "",
														"style" : "",
														"subpatcher_template" : "",
														"assistshowspatchername" : 0,
														"boxes" : [ 															{
																"box" : 																{
																	"id" : "obj-1",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "bang", "" ],
																	"patching_rect" : [ 93.0, 79.0, 29.5, 22.0 ],
																	"text" : "t b l"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-109",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "bang", "" ],
																	"patching_rect" : [ 188.299787850379971, 333.851908206939697, 56.957446694374198, 22.0 ],
																	"text" : "t b l"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-108",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 295.40978749275223, 566.726169438362149, 74.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.wrap 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-107",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.260425729751773, 525.236168007850665, 65.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.trans"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-103",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.260425729751773, 488.23439417362215, 120.872340083122253, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.subs 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-102",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.260425729751773, 452.895742993354816, 65.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.trans"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-101",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 300.09021286487598, 452.895742993354816, 29.5, 22.0 ],
																	"text" : "null"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-99",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 226.260425729751773, 425.232765388488815, 79.0, 22.0 ],
																	"text" : "bach.filternull"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-98",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 188.295319833755514, 607.383329491615314, 166.65957427024847, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.collect"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-96",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 50.0, 327.256169438362122, 55.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"embed" : 0,
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.reg"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-94",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.257234544754169, 392.989784207344201, 64.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.flat 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-93",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 5,
																	"outlettype" : [ "", "", "", "", "" ],
																	"patching_rect" : [ 226.257234544754169, 362.469786710739186, 143.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.iter 2 @maxdepth 3"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-90",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patcher" : 																	{
																		"fileversion" : 1,
																		"appversion" : 																		{
																			"major" : 8,
																			"minor" : 3,
																			"revision" : 1,
																			"architecture" : "x64",
																			"modernui" : 1
																		}
,
																		"classnamespace" : "box",
																		"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
																		"bglocked" : 0,
																		"openinpresentation" : 0,
																		"default_fontsize" : 12.0,
																		"default_fontface" : 0,
																		"default_fontname" : "Arial",
																		"gridonopen" : 1,
																		"gridsize" : [ 15.0, 15.0 ],
																		"gridsnaponopen" : 1,
																		"objectsnaponopen" : 1,
																		"statusbarvisible" : 2,
																		"toolbarvisible" : 1,
																		"lefttoolbarpinned" : 0,
																		"toptoolbarpinned" : 0,
																		"righttoolbarpinned" : 0,
																		"bottomtoolbarpinned" : 0,
																		"toolbars_unpinned_last_save" : 0,
																		"tallnewobj" : 0,
																		"boxanimatetime" : 200,
																		"enablehscroll" : 1,
																		"enablevscroll" : 1,
																		"devicewidth" : 0.0,
																		"description" : "",
																		"digest" : "",
																		"tags" : "",
																		"style" : "",
																		"subpatcher_template" : "",
																		"assistshowspatchername" : 0,
																		"boxes" : [ 																			{
																				"box" : 																				{
																					"id" : "obj-55",
																					"maxclass" : "newobj",
																					"numinlets" : 2,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.0, 233.835691094398499, 64.0, 22.0 ],
																					"text" : "bach.f2mc"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-54",
																					"maxclass" : "newobj",
																					"numinlets" : 3,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.0, 202.827938675880432, 262.0, 22.0 ],
																					"saved_object_attributes" : 																					{
																						"versionnumber" : 80005
																					}
,
																					"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-53",
																					"maxclass" : "newobj",
																					"numinlets" : 2,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.0, 168.719411015510559, 64.0, 22.0 ],
																					"text" : "bach.mc2f"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-52",
																					"maxclass" : "newobj",
																					"numinlets" : 2,
																					"numoutlets" : 2,
																					"outlettype" : [ "", "" ],
																					"patching_rect" : [ 50.0, 110.077519536018372, 52.0, 22.0 ],
																					"text" : "gate 2 1"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-50",
																					"maxclass" : "newobj",
																					"numinlets" : 1,
																					"numoutlets" : 2,
																					"outlettype" : [ "float", "float" ],
																					"patching_rect" : [ 187.689923405647306, 100.0, 97.000000000000028, 22.0 ],
																					"text" : "unpack f f"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-49",
																					"maxclass" : "newobj",
																					"numinlets" : 3,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 50.0, 140.037240028381348, 262.0, 22.0 ],
																					"saved_object_attributes" : 																					{
																						"versionnumber" : 80005
																					}
,
																					"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-85",
																					"index" : 1,
																					"maxclass" : "inlet",
																					"numinlets" : 0,
																					"numoutlets" : 1,
																					"outlettype" : [ "int" ],
																					"patching_rect" : [ 50.000005639431549, 40.000013963249216, 30.0, 30.0 ]
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-86",
																					"index" : 2,
																					"maxclass" : "inlet",
																					"numinlets" : 0,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.000005639431549, 40.000013963249216, 30.0, 30.0 ]
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-87",
																					"index" : 3,
																					"maxclass" : "inlet",
																					"numinlets" : 0,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 187.689915639431518, 40.000013963249216, 30.0, 30.0 ]
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-88",
																					"index" : 1,
																					"maxclass" : "outlet",
																					"numinlets" : 1,
																					"numoutlets" : 0,
																					"patching_rect" : [ 60.500005639431549, 315.835707963249206, 30.0, 30.0 ]
																				}

																			}
 ],
																		"lines" : [ 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-88", 0 ],
																					"source" : [ "obj-49", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-49", 2 ],
																					"order" : 1,
																					"source" : [ "obj-50", 1 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-49", 1 ],
																					"order" : 1,
																					"source" : [ "obj-50", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-54", 2 ],
																					"order" : 0,
																					"source" : [ "obj-50", 1 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-54", 1 ],
																					"order" : 0,
																					"source" : [ "obj-50", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-49", 0 ],
																					"source" : [ "obj-52", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-53", 0 ],
																					"source" : [ "obj-52", 1 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-54", 0 ],
																					"source" : [ "obj-53", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-55", 0 ],
																					"source" : [ "obj-54", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-88", 0 ],
																					"source" : [ "obj-55", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-52", 0 ],
																					"source" : [ "obj-85", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-52", 1 ],
																					"source" : [ "obj-86", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-50", 0 ],
																					"source" : [ "obj-87", 0 ]
																				}

																			}
 ]
																	}
,
																	"patching_rect" : [ 226.257234544754169, 203.848084506988471, 55.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"description" : "",
																		"digest" : "",
																		"globalpatchername" : "",
																		"tags" : ""
																	}
,
																	"text" : "p stretch"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-83",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 203.257234544754169, 232.571488556861823, 45.0, 22.0 ],
																	"text" : "bach.!-"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-81",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 239.952128291130066, 168.746169795989999, 45.0, 22.0 ],
																	"text" : "bach.+"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-80",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 476.952128291130066, 196.408297371864364, 69.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.pick 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-78",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 476.952128291130066, 165.116280078887939, 65.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.trans"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-77",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 265.952128291130066, 132.570424947738616, 230.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.mapelem @maxdepth 3 @unwrap 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-76",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 3,
																	"outlettype" : [ "", "", "bang" ],
																	"patching_rect" : [ 267.023191542625455, 100.0, 228.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.keys breakpoints null @maxdepth 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-73",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 188.295319833755514, 646.508082003593472, 147.0, 22.0 ],
																	"text" : "bach.prepend breakpoints"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-66",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 3,
																	"outlettype" : [ "", "", "bang" ],
																	"patching_rect" : [ 188.299787850379971, 300.659997429847749, 228.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.keys breakpoints null @maxdepth 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-62",
																	"linecount" : 3,
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 50.0, 364.489784207344087, 97.021277546882629, 49.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.mapelem @maxdepth 1 @unwrap 1"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-117",
																	"index" : 2,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 152.511581291130085, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-118",
																	"index" : 1,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 100.257248291130054, 36.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-119",
																	"index" : 3,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 238.257248291130054, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-120",
																	"index" : 4,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 273.257248291130054, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-121",
																	"index" : 5,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 308.257248291130054, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-122",
																	"index" : 1,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 50.000015291130069, 735.040795947738616, 30.0, 30.0 ]
																}

															}
 ],
														"lines" : [ 															{
																"patchline" : 																{
																	"destination" : [ "obj-83", 0 ],
																	"source" : [ "obj-1", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-96", 0 ],
																	"source" : [ "obj-1", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-108", 0 ],
																	"source" : [ "obj-101", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-103", 0 ],
																	"source" : [ "obj-102", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-107", 0 ],
																	"source" : [ "obj-103", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-108", 0 ],
																	"source" : [ "obj-107", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-98", 1 ],
																	"source" : [ "obj-108", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-93", 0 ],
																	"source" : [ "obj-109", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-98", 0 ],
																	"source" : [ "obj-109", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-76", 0 ],
																	"order" : 0,
																	"source" : [ "obj-117", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-96", 1 ],
																	"order" : 1,
																	"source" : [ "obj-117", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"source" : [ "obj-118", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 0 ],
																	"source" : [ "obj-119", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-81", 0 ],
																	"source" : [ "obj-120", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 2 ],
																	"source" : [ "obj-121", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-122", 0 ],
																	"source" : [ "obj-62", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-66", 0 ],
																	"source" : [ "obj-62", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-109", 0 ],
																	"source" : [ "obj-66", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-62", 1 ],
																	"source" : [ "obj-66", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-62", 1 ],
																	"source" : [ "obj-73", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-77", 0 ],
																	"source" : [ "obj-76", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-78", 0 ],
																	"source" : [ "obj-77", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-81", 1 ],
																	"source" : [ "obj-77", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-80", 0 ],
																	"source" : [ "obj-78", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-77", 1 ],
																	"midpoints" : [ 486.452128291130066, 231.511483192443848, 581.912547583580022, 231.511483192443848, 581.912547583580022, 125.128505229949951, 486.452128291130066, 125.128505229949951 ],
																	"source" : [ "obj-80", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 1 ],
																	"source" : [ "obj-81", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-93", 1 ],
																	"source" : [ "obj-83", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-83", 1 ],
																	"source" : [ "obj-90", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-103", 2 ],
																	"midpoints" : [ 297.757234544754169, 408.607446448803103, 337.632765812874027, 408.607446448803103 ],
																	"source" : [ "obj-93", 2 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-94", 0 ],
																	"source" : [ "obj-93", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-98", 2 ],
																	"source" : [ "obj-93", 4 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-99", 0 ],
																	"source" : [ "obj-94", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-62", 0 ],
																	"source" : [ "obj-96", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-73", 0 ],
																	"source" : [ "obj-98", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-101", 0 ],
																	"source" : [ "obj-99", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-102", 0 ],
																	"source" : [ "obj-99", 0 ]
																}

															}
 ]
													}
,
													"patching_rect" : [ 823.197870993614288, 607.83565313274471, 208.540215434768641, 30.0 ],
													"saved_object_attributes" : 													{
														"description" : "",
														"digest" : "",
														"globalpatchername" : "",
														"tags" : ""
													}
,
													"text" : "p handle_breakpoints"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-126",
													"maxclass" : "newobj",
													"numinlets" : 3,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patcher" : 													{
														"fileversion" : 1,
														"appversion" : 														{
															"major" : 8,
															"minor" : 3,
															"revision" : 1,
															"architecture" : "x64",
															"modernui" : 1
														}
,
														"classnamespace" : "box",
														"rect" : [ 34.0, 34.0, 640.0, 480.0 ],
														"bglocked" : 0,
														"openinpresentation" : 0,
														"default_fontsize" : 12.0,
														"default_fontface" : 0,
														"default_fontname" : "Arial",
														"gridonopen" : 1,
														"gridsize" : [ 15.0, 15.0 ],
														"gridsnaponopen" : 1,
														"objectsnaponopen" : 1,
														"statusbarvisible" : 2,
														"toolbarvisible" : 1,
														"lefttoolbarpinned" : 0,
														"toptoolbarpinned" : 0,
														"righttoolbarpinned" : 0,
														"bottomtoolbarpinned" : 0,
														"toolbars_unpinned_last_save" : 0,
														"tallnewobj" : 0,
														"boxanimatetime" : 200,
														"enablehscroll" : 1,
														"enablevscroll" : 1,
														"devicewidth" : 0.0,
														"description" : "",
														"digest" : "",
														"tags" : "",
														"style" : "",
														"subpatcher_template" : "",
														"assistshowspatchername" : 0,
														"boxes" : [ 															{
																"box" : 																{
																	"id" : "obj-55",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.0, 233.835691094398499, 64.0, 22.0 ],
																	"text" : "bach.f2mc"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-54",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.0, 202.827938675880432, 262.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-53",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.0, 168.719411015510559, 64.0, 22.0 ],
																	"text" : "bach.mc2f"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-52",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 50.0, 110.077519536018372, 52.0, 22.0 ],
																	"text" : "gate 2 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-50",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "float", "float" ],
																	"patching_rect" : [ 187.689923405647306, 100.0, 97.000000000000028, 22.0 ],
																	"text" : "unpack f f"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-49",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 50.0, 140.037240028381348, 262.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-85",
																	"index" : 1,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 50.000005639431549, 40.000013963249216, 30.0, 30.0 ],
																	"varname" : "u695006080"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-86",
																	"index" : 2,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.000005639431549, 40.000013963249216, 30.0, 30.0 ],
																	"varname" : "u884006079"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-87",
																	"index" : 3,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 187.689915639431518, 40.000013963249216, 30.0, 30.0 ],
																	"varname" : "u780006078"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-88",
																	"index" : 1,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 60.500005639431549, 315.835707963249206, 30.0, 30.0 ],
																	"varname" : "u908006081"
																}

															}
 ],
														"lines" : [ 															{
																"patchline" : 																{
																	"destination" : [ "obj-88", 0 ],
																	"source" : [ "obj-49", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-49", 2 ],
																	"order" : 1,
																	"source" : [ "obj-50", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-49", 1 ],
																	"order" : 1,
																	"source" : [ "obj-50", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-54", 2 ],
																	"order" : 0,
																	"source" : [ "obj-50", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-54", 1 ],
																	"order" : 0,
																	"source" : [ "obj-50", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-49", 0 ],
																	"source" : [ "obj-52", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-53", 0 ],
																	"source" : [ "obj-52", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-54", 0 ],
																	"source" : [ "obj-53", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-55", 0 ],
																	"source" : [ "obj-54", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-88", 0 ],
																	"source" : [ "obj-55", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-52", 0 ],
																	"source" : [ "obj-85", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-52", 1 ],
																	"source" : [ "obj-86", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-50", 0 ],
																	"source" : [ "obj-87", 0 ]
																}

															}
 ]
													}
,
													"patching_rect" : [ 771.973402976989746, 523.275745630264282, 55.0, 22.0 ],
													"saved_object_attributes" : 													{
														"description" : "",
														"digest" : "",
														"globalpatchername" : "",
														"tags" : ""
													}
,
													"text" : "p stretch"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-127",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 771.973402976989746, 561.098997323189224, 29.5, 22.0 ],
													"text" : "t l l"
												}

											}
, 											{
												"box" : 												{
													"fontsize" : 18.928428436889931,
													"id" : "obj-123",
													"maxclass" : "newobj",
													"numinlets" : 5,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patcher" : 													{
														"fileversion" : 1,
														"appversion" : 														{
															"major" : 8,
															"minor" : 3,
															"revision" : 1,
															"architecture" : "x64",
															"modernui" : 1
														}
,
														"classnamespace" : "box",
														"rect" : [ 818.0, 305.0, 640.0, 480.0 ],
														"bglocked" : 0,
														"openinpresentation" : 0,
														"default_fontsize" : 12.0,
														"default_fontface" : 0,
														"default_fontname" : "Arial",
														"gridonopen" : 1,
														"gridsize" : [ 15.0, 15.0 ],
														"gridsnaponopen" : 1,
														"objectsnaponopen" : 1,
														"statusbarvisible" : 2,
														"toolbarvisible" : 1,
														"lefttoolbarpinned" : 0,
														"toptoolbarpinned" : 0,
														"righttoolbarpinned" : 0,
														"bottomtoolbarpinned" : 0,
														"toolbars_unpinned_last_save" : 0,
														"tallnewobj" : 0,
														"boxanimatetime" : 200,
														"enablehscroll" : 1,
														"enablevscroll" : 1,
														"devicewidth" : 0.0,
														"description" : "",
														"digest" : "",
														"tags" : "",
														"style" : "",
														"subpatcher_template" : "",
														"assistshowspatchername" : 0,
														"boxes" : [ 															{
																"box" : 																{
																	"id" : "obj-1",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "bang", "" ],
																	"patching_rect" : [ 93.0, 79.0, 29.5, 22.0 ],
																	"text" : "t b l"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-109",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "bang", "" ],
																	"patching_rect" : [ 188.299787850379971, 333.851908206939697, 56.957446694374198, 22.0 ],
																	"text" : "t b l"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-108",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 295.40978749275223, 566.726169438362149, 74.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.wrap 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-107",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.260425729751773, 525.236168007850665, 65.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.trans"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-103",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.260425729751773, 488.23439417362215, 120.872340083122253, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.subs 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-102",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.260425729751773, 452.895742993354816, 65.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.trans"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-101",
																	"maxclass" : "message",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 300.09021286487598, 452.895742993354816, 29.5, 22.0 ],
																	"text" : "null"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-99",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 226.260425729751773, 425.232765388488815, 79.0, 22.0 ],
																	"text" : "bach.filternull"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-98",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 188.295319833755514, 607.383329491615314, 166.65957427024847, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.collect"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-96",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 50.0, 327.256169438362122, 55.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"embed" : 0,
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.reg"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-94",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 226.257234544754169, 392.989784207344201, 64.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.flat 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-93",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 5,
																	"outlettype" : [ "", "", "", "", "" ],
																	"patching_rect" : [ 226.257234544754169, 362.469786710739186, 143.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.iter 2 @maxdepth 3"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-90",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patcher" : 																	{
																		"fileversion" : 1,
																		"appversion" : 																		{
																			"major" : 8,
																			"minor" : 3,
																			"revision" : 1,
																			"architecture" : "x64",
																			"modernui" : 1
																		}
,
																		"classnamespace" : "box",
																		"rect" : [ 0.0, 0.0, 640.0, 480.0 ],
																		"bglocked" : 0,
																		"openinpresentation" : 0,
																		"default_fontsize" : 12.0,
																		"default_fontface" : 0,
																		"default_fontname" : "Arial",
																		"gridonopen" : 1,
																		"gridsize" : [ 15.0, 15.0 ],
																		"gridsnaponopen" : 1,
																		"objectsnaponopen" : 1,
																		"statusbarvisible" : 2,
																		"toolbarvisible" : 1,
																		"lefttoolbarpinned" : 0,
																		"toptoolbarpinned" : 0,
																		"righttoolbarpinned" : 0,
																		"bottomtoolbarpinned" : 0,
																		"toolbars_unpinned_last_save" : 0,
																		"tallnewobj" : 0,
																		"boxanimatetime" : 200,
																		"enablehscroll" : 1,
																		"enablevscroll" : 1,
																		"devicewidth" : 0.0,
																		"description" : "",
																		"digest" : "",
																		"tags" : "",
																		"style" : "",
																		"subpatcher_template" : "",
																		"assistshowspatchername" : 0,
																		"boxes" : [ 																			{
																				"box" : 																				{
																					"id" : "obj-55",
																					"maxclass" : "newobj",
																					"numinlets" : 2,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.0, 233.835691094398499, 64.0, 22.0 ],
																					"text" : "bach.f2mc"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-54",
																					"maxclass" : "newobj",
																					"numinlets" : 3,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.0, 202.827938675880432, 262.0, 22.0 ],
																					"saved_object_attributes" : 																					{
																						"versionnumber" : 80005
																					}
,
																					"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-53",
																					"maxclass" : "newobj",
																					"numinlets" : 2,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.0, 168.719411015510559, 64.0, 22.0 ],
																					"text" : "bach.mc2f"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-52",
																					"maxclass" : "newobj",
																					"numinlets" : 2,
																					"numoutlets" : 2,
																					"outlettype" : [ "", "" ],
																					"patching_rect" : [ 50.0, 110.077519536018372, 52.0, 22.0 ],
																					"text" : "gate 2 1"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-50",
																					"maxclass" : "newobj",
																					"numinlets" : 1,
																					"numoutlets" : 2,
																					"outlettype" : [ "float", "float" ],
																					"patching_rect" : [ 187.689923405647306, 100.0, 97.000000000000028, 22.0 ],
																					"text" : "unpack f f"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"id" : "obj-49",
																					"maxclass" : "newobj",
																					"numinlets" : 3,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 50.0, 140.037240028381348, 262.0, 22.0 ],
																					"saved_object_attributes" : 																					{
																						"versionnumber" : 80005
																					}
,
																					"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-85",
																					"index" : 1,
																					"maxclass" : "inlet",
																					"numinlets" : 0,
																					"numoutlets" : 1,
																					"outlettype" : [ "int" ],
																					"patching_rect" : [ 50.000005639431549, 40.000013963249216, 30.0, 30.0 ]
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-86",
																					"index" : 2,
																					"maxclass" : "inlet",
																					"numinlets" : 0,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 83.000005639431549, 40.000013963249216, 30.0, 30.0 ]
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-87",
																					"index" : 3,
																					"maxclass" : "inlet",
																					"numinlets" : 0,
																					"numoutlets" : 1,
																					"outlettype" : [ "" ],
																					"patching_rect" : [ 187.689915639431518, 40.000013963249216, 30.0, 30.0 ]
																				}

																			}
, 																			{
																				"box" : 																				{
																					"comment" : "",
																					"id" : "obj-88",
																					"index" : 1,
																					"maxclass" : "outlet",
																					"numinlets" : 1,
																					"numoutlets" : 0,
																					"patching_rect" : [ 60.500005639431549, 315.835707963249206, 30.0, 30.0 ]
																				}

																			}
 ],
																		"lines" : [ 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-88", 0 ],
																					"source" : [ "obj-49", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-49", 2 ],
																					"order" : 1,
																					"source" : [ "obj-50", 1 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-49", 1 ],
																					"order" : 1,
																					"source" : [ "obj-50", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-54", 2 ],
																					"order" : 0,
																					"source" : [ "obj-50", 1 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-54", 1 ],
																					"order" : 0,
																					"source" : [ "obj-50", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-49", 0 ],
																					"source" : [ "obj-52", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-53", 0 ],
																					"source" : [ "obj-52", 1 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-54", 0 ],
																					"source" : [ "obj-53", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-55", 0 ],
																					"source" : [ "obj-54", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-88", 0 ],
																					"source" : [ "obj-55", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-52", 0 ],
																					"source" : [ "obj-85", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-52", 1 ],
																					"source" : [ "obj-86", 0 ]
																				}

																			}
, 																			{
																				"patchline" : 																				{
																					"destination" : [ "obj-50", 0 ],
																					"source" : [ "obj-87", 0 ]
																				}

																			}
 ]
																	}
,
																	"patching_rect" : [ 226.257234544754169, 203.848084506988471, 55.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"description" : "",
																		"digest" : "",
																		"globalpatchername" : "",
																		"tags" : ""
																	}
,
																	"text" : "p stretch"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-83",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 203.257234544754169, 232.571488556861823, 45.0, 22.0 ],
																	"text" : "bach.!-"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-81",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 239.952128291130066, 168.746169795989999, 45.0, 22.0 ],
																	"text" : "bach.+"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-80",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 476.952128291130066, 196.408297371864364, 69.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.pick 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-78",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 476.952128291130066, 165.116280078887939, 65.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.trans"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-77",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 265.952128291130066, 132.570424947738616, 230.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.mapelem @maxdepth 3 @unwrap 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-76",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 3,
																	"outlettype" : [ "", "", "bang" ],
																	"patching_rect" : [ 267.023191542625455, 100.0, 228.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.keys breakpoints null @maxdepth 2"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-73",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 188.295319833755514, 646.508082003593472, 147.0, 22.0 ],
																	"text" : "bach.prepend breakpoints"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-66",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 3,
																	"outlettype" : [ "", "", "bang" ],
																	"patching_rect" : [ 188.299787850379971, 300.659997429847749, 228.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.keys breakpoints null @maxdepth 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-62",
																	"linecount" : 3,
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 50.0, 364.489784207344087, 97.021277546882629, 49.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.mapelem @maxdepth 1 @unwrap 1"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-117",
																	"index" : 2,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 152.511581291130085, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-118",
																	"index" : 1,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 100.257248291130054, 36.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-119",
																	"index" : 3,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 238.257248291130054, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-120",
																	"index" : 4,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 273.257248291130054, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-121",
																	"index" : 5,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 308.257248291130054, 40.000024947738666, 30.0, 30.0 ]
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-122",
																	"index" : 1,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 50.000015291130069, 735.040795947738616, 30.0, 30.0 ]
																}

															}
 ],
														"lines" : [ 															{
																"patchline" : 																{
																	"destination" : [ "obj-83", 0 ],
																	"source" : [ "obj-1", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-96", 0 ],
																	"source" : [ "obj-1", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-108", 0 ],
																	"source" : [ "obj-101", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-103", 0 ],
																	"source" : [ "obj-102", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-107", 0 ],
																	"source" : [ "obj-103", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-108", 0 ],
																	"source" : [ "obj-107", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-98", 1 ],
																	"source" : [ "obj-108", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-93", 0 ],
																	"source" : [ "obj-109", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-98", 0 ],
																	"source" : [ "obj-109", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-76", 0 ],
																	"order" : 0,
																	"source" : [ "obj-117", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-96", 1 ],
																	"order" : 1,
																	"source" : [ "obj-117", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-1", 0 ],
																	"source" : [ "obj-118", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 0 ],
																	"source" : [ "obj-119", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-81", 0 ],
																	"source" : [ "obj-120", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 2 ],
																	"source" : [ "obj-121", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-122", 0 ],
																	"source" : [ "obj-62", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-66", 0 ],
																	"source" : [ "obj-62", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-109", 0 ],
																	"source" : [ "obj-66", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-62", 1 ],
																	"source" : [ "obj-66", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-62", 1 ],
																	"source" : [ "obj-73", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-77", 0 ],
																	"source" : [ "obj-76", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-78", 0 ],
																	"source" : [ "obj-77", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-81", 1 ],
																	"source" : [ "obj-77", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-80", 0 ],
																	"source" : [ "obj-78", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-77", 1 ],
																	"midpoints" : [ 486.452128291130066, 231.511483192443848, 581.912547583580022, 231.511483192443848, 581.912547583580022, 125.128505229949951, 486.452128291130066, 125.128505229949951 ],
																	"source" : [ "obj-80", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-90", 1 ],
																	"source" : [ "obj-81", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-93", 1 ],
																	"source" : [ "obj-83", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-83", 1 ],
																	"source" : [ "obj-90", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-103", 2 ],
																	"midpoints" : [ 297.757234544754169, 408.607446448803103, 337.632765812874027, 408.607446448803103 ],
																	"source" : [ "obj-93", 2 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-94", 0 ],
																	"source" : [ "obj-93", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-98", 2 ],
																	"source" : [ "obj-93", 4 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-99", 0 ],
																	"source" : [ "obj-94", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-62", 0 ],
																	"source" : [ "obj-96", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-73", 0 ],
																	"source" : [ "obj-98", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-101", 0 ],
																	"source" : [ "obj-99", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-102", 0 ],
																	"source" : [ "obj-99", 0 ]
																}

															}
 ]
													}
,
													"patching_rect" : [ 237.873413920402527, 703.04841894561855, 208.540215434768641, 30.0 ],
													"saved_object_attributes" : 													{
														"description" : "",
														"digest" : "",
														"globalpatchername" : "",
														"tags" : ""
													}
,
													"text" : "p handle_breakpoints"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-114",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 755.95106325149527, 329.317824363708496, 89.0, 22.0 ],
													"text" : "dump separate"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-115",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "bang", "bang", "" ],
													"patching_rect" : [ 745.45106325149527, 289.0, 40.0, 22.0 ],
													"text" : "t b b l"
												}

											}
, 											{
												"box" : 												{
													"bwcompatibility" : 70904,
													"clefs" : [ "G", "G" ],
													"constraintbeamsinspaces" : 0,
													"defaultnoteslots" : [ "null" ],
													"enharmonictable" : [ "default", "default" ],
													"fontface" : 0,
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"hidevoices" : [ 0, 0 ],
													"id" : "obj-113",
													"keys" : [ "CM", "CM" ],
													"linkdynamicstoslot" : 0,
													"linklyricstoslot" : 7,
													"loop" : [ "[", 1, 1, 0, "]", "[", 1, 1, 0, "]" ],
													"maketreecompatiblewithts" : 0,
													"maxclass" : "bach.score",
													"maxundosteps" : 0,
													"midichannels" : [ 1, 2 ],
													"numinlets" : 7,
													"numoutlets" : 9,
													"numparts" : [ 1, 1 ],
													"numvoices" : 2,
													"out" : "nnnnnnnn",
													"outlettype" : [ "", "", "", "", "", "", "", "", "bang" ],
													"patching_rect" : [ 697.197870993614288, 671.897171139717102, 145.0, 84.166664123535156 ],
													"pitcheditrange" : [ "null" ],
													"showmeasurenumbers" : [ 1, 1 ],
													"stafflines" : [ 5, 5 ],
													"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
													"treehandling" : 0,
													"versionnumber" : 80100,
													"voicenames" : [ "[", "]", "[", "]" ],
													"voicespacing" : [ 0.0, 26.0, 26.0 ],
													"vzoom" : 50.0,
													"whole_score_data_0000000000" : [ "score", "[", "slotinfo", "[", 1, "[", "name", "velocity envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "auto", "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 2, "[", "name", "slot function", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "auto", "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 3, "[", "name", "slot intlist", "]", "[", "type", "intlist", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 4, "[", "name", "slot floatlist", "]", "[", "type", "floatlist", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 5, "[", "name", "slot int", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 6, "[", "name", "slot float", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 7, "[", "name", "slot text", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 8, "[", "name", "slot filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 9, "[", "name", "slot spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076101120, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "auto", "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 10, "[", "name", "slot llll", "]", "[", "type", "llll", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 20, "[", "name", "dynamics", "]", "[", "type", "dynamics", "]", "[", "key", "d", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079738368, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 21, "[", "name", "lyrics", "]", "[", "type", "text", "]", "[", "key", "l", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 22, "[", "name", "articulations", "]", "[", "type", "articulations", "]", "[", "key", "a", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079738368, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 23, "[", "name", "notehead", "]", "[", "type", "notehead", "]", "[", "key", "h", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079738368, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 24, "[", "name", "annotation", "]", "[", "type", "text", "]", "[", "key", "t", "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "markers", "]", "[", "midichannels", 1, 2, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", "[", "leveltype", 1, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 1, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", "[", "1/4", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "[", "leveltype", 1, "]", "[", "[", "leveltype", 1, "]", "[", "1/16", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/16", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 17, "]", "[", "1/24", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/24", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/24", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", "]", 0, "]", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", "1/4", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/4", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "[", "leveltype", 1, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 1, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", 0, "]", 0, "]", "[", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", 1, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", 0, "]", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", "[", "leveltype", 17, "]", "[", "1/5", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "-1/5", 0, "]", "[", "1/5", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "[", "leveltype", 17, "]", "[", "1/15", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/15", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "[", "1/15", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", "[", "1/5", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", 0, "]", 0, "]" ],
													"whole_score_data_count" : [ 1 ]
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-89",
													"maxclass" : "newobj",
													"numinlets" : 3,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patcher" : 													{
														"fileversion" : 1,
														"appversion" : 														{
															"major" : 8,
															"minor" : 3,
															"revision" : 1,
															"architecture" : "x64",
															"modernui" : 1
														}
,
														"classnamespace" : "box",
														"rect" : [ 34.0, 34.0, 640.0, 480.0 ],
														"bglocked" : 0,
														"openinpresentation" : 0,
														"default_fontsize" : 12.0,
														"default_fontface" : 0,
														"default_fontname" : "Arial",
														"gridonopen" : 1,
														"gridsize" : [ 15.0, 15.0 ],
														"gridsnaponopen" : 1,
														"objectsnaponopen" : 1,
														"statusbarvisible" : 2,
														"toolbarvisible" : 1,
														"lefttoolbarpinned" : 0,
														"toptoolbarpinned" : 0,
														"righttoolbarpinned" : 0,
														"bottomtoolbarpinned" : 0,
														"toolbars_unpinned_last_save" : 0,
														"tallnewobj" : 0,
														"boxanimatetime" : 200,
														"enablehscroll" : 1,
														"enablevscroll" : 1,
														"devicewidth" : 0.0,
														"description" : "",
														"digest" : "",
														"tags" : "",
														"style" : "",
														"subpatcher_template" : "",
														"assistshowspatchername" : 0,
														"boxes" : [ 															{
																"box" : 																{
																	"id" : "obj-55",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.0, 233.835691094398499, 64.0, 22.0 ],
																	"text" : "bach.f2mc"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-54",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.0, 202.827938675880432, 262.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-53",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.0, 168.719411015510559, 64.0, 22.0 ],
																	"text" : "bach.mc2f"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-52",
																	"maxclass" : "newobj",
																	"numinlets" : 2,
																	"numoutlets" : 2,
																	"outlettype" : [ "", "" ],
																	"patching_rect" : [ 50.0, 110.077519536018372, 52.0, 22.0 ],
																	"text" : "gate 2 1"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-50",
																	"maxclass" : "newobj",
																	"numinlets" : 1,
																	"numoutlets" : 2,
																	"outlettype" : [ "float", "float" ],
																	"patching_rect" : [ 187.689923405647306, 100.0, 97.000000000000028, 22.0 ],
																	"text" : "unpack f f"
																}

															}
, 															{
																"box" : 																{
																	"id" : "obj-49",
																	"maxclass" : "newobj",
																	"numinlets" : 3,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 50.0, 140.037240028381348, 262.0, 22.0 ],
																	"saved_object_attributes" : 																	{
																		"versionnumber" : 80005
																	}
,
																	"text" : "bach.expr ($f1 - $f3) * $f2 + $f3 @scalarmode 1"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-85",
																	"index" : 1,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "int" ],
																	"patching_rect" : [ 50.000005639431549, 40.000013963249216, 30.0, 30.0 ],
																	"varname" : "u695006080"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-86",
																	"index" : 2,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 83.000005639431549, 40.000013963249216, 30.0, 30.0 ],
																	"varname" : "u884006079"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-87",
																	"index" : 3,
																	"maxclass" : "inlet",
																	"numinlets" : 0,
																	"numoutlets" : 1,
																	"outlettype" : [ "" ],
																	"patching_rect" : [ 187.689915639431518, 40.000013963249216, 30.0, 30.0 ],
																	"varname" : "u780006078"
																}

															}
, 															{
																"box" : 																{
																	"comment" : "",
																	"id" : "obj-88",
																	"index" : 1,
																	"maxclass" : "outlet",
																	"numinlets" : 1,
																	"numoutlets" : 0,
																	"patching_rect" : [ 60.500005639431549, 315.835707963249206, 30.0, 30.0 ],
																	"varname" : "u908006081"
																}

															}
 ],
														"lines" : [ 															{
																"patchline" : 																{
																	"destination" : [ "obj-88", 0 ],
																	"source" : [ "obj-49", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-49", 2 ],
																	"order" : 1,
																	"source" : [ "obj-50", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-49", 1 ],
																	"order" : 1,
																	"source" : [ "obj-50", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-54", 2 ],
																	"order" : 0,
																	"source" : [ "obj-50", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-54", 1 ],
																	"order" : 0,
																	"source" : [ "obj-50", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-49", 0 ],
																	"source" : [ "obj-52", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-53", 0 ],
																	"source" : [ "obj-52", 1 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-54", 0 ],
																	"source" : [ "obj-53", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-55", 0 ],
																	"source" : [ "obj-54", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-88", 0 ],
																	"source" : [ "obj-55", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-52", 0 ],
																	"source" : [ "obj-85", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-52", 1 ],
																	"source" : [ "obj-86", 0 ]
																}

															}
, 															{
																"patchline" : 																{
																	"destination" : [ "obj-50", 0 ],
																	"source" : [ "obj-87", 0 ]
																}

															}
 ]
													}
,
													"patching_rect" : [ 161.554265379905701, 604.658724308013916, 55.0, 22.0 ],
													"saved_object_attributes" : 													{
														"description" : "",
														"digest" : "",
														"globalpatchername" : "",
														"tags" : ""
													}
,
													"text" : "p stretch"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-84",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 161.554265379905701, 642.481976000938857, 29.5, 22.0 ],
													"text" : "t l l"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-61",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 325.531912565231323, 99.999999284744263, 50.0, 22.0 ]
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-58",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 127.554265379905701, 369.0, 89.0, 22.0 ],
													"text" : "dump separate"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-51",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "bang", "bang", "" ],
													"patching_rect" : [ 117.054265379905701, 328.682175636291504, 40.0, 22.0 ],
													"text" : "t b b l"
												}

											}
, 											{
												"box" : 												{
													"bgslots" : [ 1 ],
													"breakpointshavenoteheads" : 1,
													"bwcompatibility" : 80100,
													"clefs" : [ "FGG" ],
													"defaultnoteslots" : [ "null" ],
													"fontface" : 0,
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"grid" : 1,
													"highlightplay" : 1,
													"id" : "obj-45",
													"linklyricstoslot" : 7,
													"loop" : [ 0.0, 0.0 ],
													"maxclass" : "bach.roll",
													"numinlets" : 6,
													"numoutlets" : 8,
													"numvoices" : 1,
													"out" : "nnnnnnn",
													"outlettype" : [ "", "", "", "", "", "", "", "bang" ],
													"patching_rect" : [ 104.960163100106371, 776.525167185936425, 253.752718680245579, 95.666666666666629 ],
													"pitcheditrange" : [ "null" ],
													"ruler" : 2,
													"showplayhead" : 1,
													"showvelocity" : 1,
													"stafflines" : [ 5 ],
													"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
													"tonedivision" : 8,
													"versionnumber" : 80100,
													"voicenames" : [ "[", "]" ],
													"voicespacing" : [ 0.0, 17.0 ],
													"whole_roll_data_0000000000" : [ "roll", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1075314688, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "dB", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 2, "[", "name", "gate", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1074266112, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 3, "[", "name", "tremolo frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076756480, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 4, "[", "name", "tremolo depth", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 5, "[", "name", "control", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 6, "[", "name", "modulation frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078525952, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 7, "[", "name", "modulation ratio", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 8, "[", "name", "filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 9, "[", "name", "spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 39322, 1069128089, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1073217536, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 10, "[", "name", "synth type", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 20, "[", "name", "slot 20", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 21, "[", "name", "slot 21", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 22, "[", "name", "slot 22", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 23, "[", "name", "slot 23", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 24, "[", "name", "slot 24", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "groups", "]", "[", "markers", "]", "[", "midichannels", 1, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3279945731, 1082001112, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2255068442, 1086010087, "_x_x_x_x_bach_float64_x_x_x_x_", 1572863996, 1082444606, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083303765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2832397054, 1086010373, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1962919990, 1086474701, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 481327639, 1086524121, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083783765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3120135694, 1086010325, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2656861149, 1086474681, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1271449544, 1086524100, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1677610141, 1086564543, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1083986432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3480184861, 1086010264, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 576215848, 1086410951, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3462815678, 1086474653, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3654319708, 1086524069, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1078243024, 1086564514, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1084082432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3105654056, 1086010205, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 732155261, 1086410919, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3104838044, 1086474623, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1282203995, 1086524035, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1602379112, 1086564481, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2021654530, 1084183464, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 535287438, 1086010070, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1494361537, 1086410845, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1844552157, 1086474558, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1899766873, 1086523965, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 515743523, 1086564414, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2474639359, 1084323848, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 346882398, 1086009853, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1300299665, 1086410726, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4232862857, 1086474452, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2642010203, 1086523849, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1974155680, 1086564298, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1513912509, 1086654136, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084416341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1943402092, 1086009529, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 853236460, 1086410451, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3020430405, 1086474294, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3270946797, 1086523690, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1673234353, 1086564079, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3578223740, 1086598282, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148410743, 1086653941, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2464569610, 1086677328, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1850707749, 1086698418, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 584359022, 1086735449, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2533359616, 1084550337, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4142179832, 1086009192, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 685202160, 1086316212, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 845542294, 1086410284, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1757514476, 1086474118, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2921007814, 1086523528, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2077385243, 1086563902, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4064478956, 1086598069, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1621402919, 1086653776, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2420258151, 1086677141, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3929701578, 1086698253, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1736736883, 1086735255, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2994733056, 1084666572, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4257198534, 1086008683, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3180243994, 1086315715, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3932302843, 1086410028, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 808847812, 1086473766, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4062254433, 1086523278, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 872266964, 1086563659, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3678209178, 1086597799, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3653300449, 1086653518, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3385776772, 1086676858, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3148991369, 1086698016, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1643322750, 1086734971, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3596386156, 1086766688, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 6626361, 1086794440, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548865, 1084821674, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 214413676, 1086008080, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1296441870, 1086315132, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3411500479, 1086409716, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2188273512, 1086473466, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276405188, 1086522894, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2697309228, 1086563320, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1719041260, 1086597505, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1985212426, 1086627091, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3338110550, 1086653190, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2220662760, 1086676534, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2182806990, 1086716923, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2008139464, 1086734671, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1421666193, 1086766372, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3904365844, 1086794097, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084960341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 902583259, 1086007782, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3875122155, 1086314852, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2437561735, 1086409586, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 765993277, 1086473332, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1327128914, 1086522758, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 45100834, 1086563170, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1555630935, 1086597321, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1813435161, 1086626915, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1287652765, 1086653026, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3993228130, 1086676385, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2266568718, 1086697489, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1955822723, 1086716772, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2602510365, 1086734513, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 745290028, 1086750947, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1412446299, 1086766236, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3827195545, 1086793970, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4240441345, 1085023169, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3188069835, 1086007587, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3659470694, 1086314632, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 144121206, 1086409486, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2414467972, 1086473232, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1611394378, 1086522663, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 83, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3539082373, 1086563059, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3643273214, 1086597220, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 313128363, 1086626783, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3741186731, 1086652937, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3238190081, 1086676283, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2488174211, 1086697402, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1366522755, 1086716678, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 164241603, 1086734413, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2275418596, 1086750839, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 402402569, 1086766118, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4000394381, 1086793850, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085286250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1350362179, 1086007912, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2171633689, 1086314941, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 437242070, 1086409659, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3006190658, 1086473416, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3915917644, 1086522849, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1497346265, 1086563227, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2727852681, 1086597430, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3547967791, 1086653126, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157446149, 1086676459, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1116848704, 1086697564, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3593636804, 1086716856, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4189464077, 1086734585, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1316446270, 1086766338, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3095421100, 1086794040, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2868903936, 1085319493, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4260387140, 1086008267, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3582798396, 1086315329, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1285822804, 1086409874, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3321414206, 1086473588, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2057201398, 1086523031, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3030254096, 1086563512, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2361111533, 1086597610, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148427473, 1086653308, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3727103494, 1086676644, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 344952119, 1086697762, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3733027226, 1086734795, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 459472221, 1086766480, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2761602602, 1086794227, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085347584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 801810412, 1086008571, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 832720799, 1086315545, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1445452888, 1086410009, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4037613007, 1086473725, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 338703794, 1086523246, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 440890128, 1086563652, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 194409856, 1086597763, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1951034082, 1086653429, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 695598379, 1086676798, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4188261335, 1086697923, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 115692050, 1086734939, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1307866405, 1086766662, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085374250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 689843061, 1086008659, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1562919325, 1086315600, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 192437981, 1086410035, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3409812094, 1086473758, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3129161191, 1086523284, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2570799127, 1086563671, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3517616704, 1086597809, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2104869098, 1086653520, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2190279866, 1086676838, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3723136193, 1086734980, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1113679089, 1086766707, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085390250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2178502463, 1086008761, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 722961867, 1086410075, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 503457579, 1086473797, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1803081132, 1086523322, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1017373580, 1086563709, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 873081333, 1086597854, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3760898659, 1086653568, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3528794153, 1086676888, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3468954531, 1086735049, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1996488704, 1085435710, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3851644948, 1086008833, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 989476917, 1086410119, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2986873657, 1086473841, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 89018829, 1086523374, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3894360099, 1086563753, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2738191684, 1086597901, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3977167817, 1086676945, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085462250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4021569939, 1086008955, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157682600, 1086410168, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2323847969, 1086473989, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2705422552, 1086523428, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3592023863, 1086563810, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 659086994, 1086597959, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3108910011, 1086677008, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085507584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3998506500, 1086009123, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 502543187, 1086410252, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4220183720, 1086474078, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3016857675, 1086523514, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276984072, 1086563896, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2885298813, 1086677103, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085590250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1126944945, 1086009312, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 91245062, 1086474176, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1092975327, 1086523606, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1207736957, 1086563993, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2625921563, 1086677181, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2290089984, 1085641405, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 900758502, 1086009467, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1519583510, 1086474252, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 606554684, 1086523681, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2446230958, 1086564073, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3677225053, 1086677280, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085680917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3559484995, 1086009541, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2717081234, 1086474288, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3173461469, 1086523719, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3959717309, 1086564110, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3655769114, 1086677312, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085696917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3179456337, 1086009564, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1941183548, 1086474315, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2481358717, 1086523745, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 77067571, 1086564136, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085723584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 314540864, 1086009622, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3639080681, 1086474329, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2592079872, 1085777027, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3176710950, 1086009587, "_x_x_x_x_bach_float64_x_x_x_x_", 2952790016, 1080090508, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085811584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1443543665, 1086009526, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1082081280, 80, 0, "]", 0, "]", 0, "]" ],
													"whole_roll_data_count" : [ 1 ],
													"zoom" : 50.0
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-39",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "float" ],
													"patching_rect" : [ 444.5, 68.0, 31.0, 22.0 ],
													"text" : "float"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-29",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "int" ],
													"patching_rect" : [ 585.0, 127.0, 29.5, 22.0 ],
													"text" : "int"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-28",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "int" ],
													"patching_rect" : [ 772.0, 117.0, 29.5, 22.0 ],
													"text" : "+ 1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-25",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 661.75, 99.0, 29.5, 22.0 ],
													"text" : "1"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-24",
													"maxclass" : "message",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 536.5, 99.0, 29.5, 22.0 ],
													"text" : "2"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-20",
													"maxclass" : "newobj",
													"numinlets" : 3,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 122.25, 187.0, 81.0, 22.0 ],
													"text" : "pak 1. 0. 440."
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-19",
													"maxclass" : "newobj",
													"numinlets" : 9,
													"numoutlets" : 9,
													"outlettype" : [ "bang", "bang", "bang", "bang", "bang", "bang", "bang", "bang", "" ],
													"patching_rect" : [ 536.5, 68.0, 265.0, 22.0 ],
													"text" : "sel freq frequency Frequency f midi pitch Pitch p"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-18",
													"maxclass" : "newobj",
													"numinlets" : 4,
													"numoutlets" : 4,
													"outlettype" : [ "", "", "", "" ],
													"patching_rect" : [ 444.5, 31.0, 157.0, 22.0 ],
													"text" : "route tuning diapason mode"
												}

											}
, 											{
												"box" : 												{
													"comment" : "float: Center Pitch or Frequency",
													"cool" : 1,
													"id" : "obj-17",
													"index" : 3,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 224.5, 11.0, 25.0, 25.0 ]
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-38",
													"maxclass" : "newobj",
													"numinlets" : 0,
													"numoutlets" : 0,
													"patching_rect" : [ 272.75, 11.0, 136.0, 22.0 ],
													"text" : "cage.checkbachversion"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-14",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 619.75, 336.0, 41.0, 22.0 ],
													"text" : "zl join"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-13",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "dump", "" ],
													"patching_rect" : [ 619.75, 269.0, 51.0, 22.0 ],
													"text" : "t dump l"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-16",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 51.75, 117.0, 29.5, 22.0 ],
													"text" : "t l l"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-15",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 50.75, 332.0, 41.0, 22.0 ],
													"text" : "zl join"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-12",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "dump", "" ],
													"patching_rect" : [ 51.75, 265.0, 51.0, 22.0 ],
													"text" : "t dump l"
												}

											}
, 											{
												"box" : 												{
													"id" : "obj-56",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 673.0714111328125, 150.0, 167.0, 22.0 ],
													"text" : "cage.inferheadersyms @out t"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-10",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 51.75, 85.0, 57.0, 22.0 ],
													"saved_object_attributes" : 													{
														"embed" : 0,
														"versionnumber" : 80001
													}
,
													"text" : "bach.reg"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-6",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 423.75, 187.0, 32.5, 22.0 ],
													"text" : "t b l"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-7",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 423.75, 229.0, 89.5, 22.0 ],
													"text" : "zl.reg"
												}

											}
, 											{
												"box" : 												{
													"bwcompatibility" : 70904,
													"clefs" : [ "G", "G" ],
													"constraintbeamsinspaces" : 0,
													"defaultnoteslots" : [ "null" ],
													"enharmonictable" : [ "default", "default" ],
													"fontface" : 0,
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"hidevoices" : [ 0, 0 ],
													"id" : "obj-11",
													"keys" : [ "CM", "CM" ],
													"linkdynamicstoslot" : 0,
													"linklyricstoslot" : 7,
													"loop" : [ "[", 1, 1, 0, "]", "[", 1, 1, 0, "]" ],
													"maxclass" : "bach.score",
													"maxundosteps" : 0,
													"midichannels" : [ 1, 2 ],
													"numinlets" : 7,
													"numoutlets" : 9,
													"numparts" : [ 1, 1 ],
													"numvoices" : 2,
													"out" : "nnnnnnnn",
													"outlettype" : [ "", "", "", "", "", "", "", "", "bang" ],
													"outputtrees" : 2,
													"patching_rect" : [ 758.473402976989746, 401.480620503425598, 145.0, 84.166664123535156 ],
													"pitcheditrange" : [ "null" ],
													"showmeasurenumbers" : [ 1, 1 ],
													"stafflines" : [ 5, 5 ],
													"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
													"versionnumber" : 80100,
													"voicenames" : [ "[", "]", "[", "]" ],
													"voicespacing" : [ 0.0, 26.0, 26.0 ],
													"vzoom" : 50.0,
													"whole_score_data_0000000000" : [ "score", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 2, "[", "name", "slot function", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 3, "[", "name", "slot intlist", "]", "[", "type", "intlist", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 4, "[", "name", "slot floatlist", "]", "[", "type", "floatlist", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 5, "[", "name", "slot int", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 6, "[", "name", "slot float", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 7, "[", "name", "lyrics", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 8, "[", "name", "filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 9, "[", "name", "spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076101120, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 10, "[", "name", "slot 10", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 20, "[", "name", "slot 20", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 21, "[", "name", "slot 21", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "]", "[", 22, "[", "name", "slot 22", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 23, "[", "name", "slot 23", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 24, "[", "name", "slot 24", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "singleslotfortiednotes", 1, "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "markers", "]", "[", "midichannels", 1, 2, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", "[", "leveltype", 8, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085993984, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086045184, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 8, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086070784, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086121984, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 8, "]", "[", "1/4", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086173184, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 8, "]", "[", "[", "leveltype", 1, "]", "[", "1/16", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086070784, 100, 0, 0, "]", 0, "]", "[", "1/16", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086173184, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 17, "]", "[", "1/24", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086121984, 100, 0, 0, "]", 0, "]", "[", "1/24", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086070784, 100, 0, 0, "]", 0, "]", "[", "1/24", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086045184, 100, 0, 0, "]", 0, "]", "]", "]", 0, "]", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", "[", "leveltype", 8, "]", "[", "1/4", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086070784, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 8, "]", "[", "1/4", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085993984, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 8, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085891584, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085865984, 100, 0, 0, "]", 0, "]", "]", "[", "[", "leveltype", 8, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085814784, 100, 0, 0, "]", 0, "]", "[", "1/8", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085763584, 100, 0, 0, "]", 0, "]", "]", 0, "]", 0, "]", "[", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", 1, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086070784, 100, 0, 0, "]", 0, "]", 0, "]", "[", "[", "[", 4, 4, "]", "[", "]", "]", "[", "leveltype", 1, "]", "[", "[", "leveltype", 17, "]", "[", "1/5", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085814784, 100, 0, 0, "]", 0, "]", "[", "-1/5", 0, "]", "[", "1/5", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086224384, 100, 0, 0, "]", 0, "]", "[", "[", "leveltype", 17, "]", "[", "1/15", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085917184, 100, 0, 0, "]", 0, "]", "[", "1/15", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086173184, 100, 0, 0, "]", 0, "]", "[", "1/15", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085917184, 100, 0, 0, "]", 0, "]", "]", "[", "1/5", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085814784, 100, 0, 0, "]", 0, "]", "]", 0, "]", 0, "]" ],
													"whole_score_data_count" : [ 1 ]
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-3",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 3,
													"outlettype" : [ "", "", "bang" ],
													"patching_rect" : [ 51.75, 150.0, 433.0, 22.0 ],
													"saved_object_attributes" : 													{
														"versionnumber" : 80001
													}
,
													"text" : "bach.keys roll score @keep 1"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-68",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "bang", "" ],
													"patching_rect" : [ 51.75, 187.0, 32.5, 22.0 ],
													"text" : "t b l"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-67",
													"maxclass" : "newobj",
													"numinlets" : 2,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 51.75, 229.0, 89.5, 22.0 ],
													"text" : "zl.reg"
												}

											}
, 											{
												"box" : 												{
													"comment" : "float: Stretch factor",
													"cool" : 1,
													"id" : "obj-64",
													"index" : 2,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "float" ],
													"patching_rect" : [ 120.5, 11.0, 25.0, 25.0 ]
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-5",
													"maxclass" : "newobj",
													"numinlets" : 4,
													"numoutlets" : 6,
													"outlettype" : [ "bang", "", "", "", "", "" ],
													"patching_rect" : [ 16.5, 54.0, 331.0, 22.0 ],
													"saved_object_attributes" : 													{
														"versionnumber" : 80002
													}
,
													"text" : "bach.args 1. 0 @ins 3 @out nt @attrs mode tuning diapason"
												}

											}
, 											{
												"box" : 												{
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"id" : "obj-9",
													"maxclass" : "newobj",
													"numinlets" : 1,
													"numoutlets" : 2,
													"outlettype" : [ "", "" ],
													"patching_rect" : [ 104.960163100106371, 894.354626376305077, 112.0, 22.0 ],
													"saved_object_attributes" : 													{
														"versionnumber" : 80001
													}
,
													"text" : "bach.portal @out p"
												}

											}
, 											{
												"box" : 												{
													"bgslots" : [ 1 ],
													"breakpointshavenoteheads" : 1,
													"bwcompatibility" : 80100,
													"clefs" : [ "FGG" ],
													"defaultnoteslots" : [ "null" ],
													"fontface" : 0,
													"fontname" : "Arial",
													"fontsize" : 12.0,
													"grid" : 1,
													"highlightplay" : 1,
													"id" : "obj-4",
													"linklyricstoslot" : 7,
													"loop" : [ 0.0, 0.0 ],
													"maxclass" : "bach.roll",
													"numinlets" : 6,
													"numoutlets" : 8,
													"numvoices" : 1,
													"out" : "nnnnnnn",
													"outlettype" : [ "", "", "", "", "", "", "", "bang" ],
													"patching_rect" : [ 127.35465145111084, 476.480620503425598, 140.0, 92.5 ],
													"pitcheditrange" : [ "null" ],
													"ruler" : 2,
													"showplayhead" : 1,
													"showvelocity" : 1,
													"stafflines" : [ 5 ],
													"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
													"tonedivision" : 8,
													"versionnumber" : 80100,
													"voicenames" : [ "[", "]" ],
													"voicespacing" : [ 0.0, 17.0 ],
													"whole_roll_data_0000000000" : [ "roll", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "dB.", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 2, "[", "name", "gate", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1074266112, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 3, "[", "name", "tremolo frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076756480, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 4, "[", "name", "tremolo depth", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 5, "[", "name", "control", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 6, "[", "name", "modulation frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078525952, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 7, "[", "name", "modulation ratio", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 8, "[", "name", "filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 9, "[", "name", "spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 39322, 1069128089, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1073217536, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 10, "[", "name", "synth type", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 20, "[", "name", "slot 20", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 21, "[", "name", "slot 21", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 22, "[", "name", "slot 22", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 23, "[", "name", "slot 23", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 24, "[", "name", "slot 24", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "groups", "]", "[", "markers", "]", "[", "midichannels", 1, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3279945731, 1082001112, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2255068442, 1086010087, "_x_x_x_x_bach_float64_x_x_x_x_", 1572863996, 1082444606, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083303765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2832397054, 1086010373, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1962919990, 1086474701, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 481327639, 1086524121, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083783765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3120135694, 1086010325, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2656861149, 1086474681, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1271449544, 1086524100, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1677610141, 1086564543, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1083986432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3480184861, 1086010264, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 576215848, 1086410951, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3462815678, 1086474653, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3654319708, 1086524069, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1078243024, 1086564514, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1084082432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3105654056, 1086010205, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 732155261, 1086410919, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3104838044, 1086474623, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1282203995, 1086524035, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1602379112, 1086564481, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2021654530, 1084183464, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 535287438, 1086010070, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1494361537, 1086410845, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1844552157, 1086474558, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1899766873, 1086523965, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 515743523, 1086564414, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2474639359, 1084323848, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 346882398, 1086009853, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1300299665, 1086410726, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4232862857, 1086474452, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2642010203, 1086523849, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1974155680, 1086564298, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1513912509, 1086654136, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084416341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1943402092, 1086009529, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 853236460, 1086410451, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3020430405, 1086474294, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3270946797, 1086523690, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1673234353, 1086564079, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3578223740, 1086598282, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148410743, 1086653941, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2464569610, 1086677328, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1850707749, 1086698418, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 584359022, 1086735449, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2533359616, 1084550337, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4142179832, 1086009192, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 685202160, 1086316212, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 845542294, 1086410284, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1757514476, 1086474118, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2921007814, 1086523528, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2077385243, 1086563902, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4064478956, 1086598069, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1621402919, 1086653776, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2420258151, 1086677141, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3929701578, 1086698253, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1736736883, 1086735255, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2994733056, 1084666572, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4257198534, 1086008683, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3180243994, 1086315715, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3932302843, 1086410028, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 808847812, 1086473766, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4062254433, 1086523278, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 872266964, 1086563659, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3678209178, 1086597799, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3653300449, 1086653518, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3385776772, 1086676858, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3148991369, 1086698016, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1643322750, 1086734971, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3596386156, 1086766688, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 6626361, 1086794440, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548865, 1084821674, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 214413676, 1086008080, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1296441870, 1086315132, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3411500479, 1086409716, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2188273512, 1086473466, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276405188, 1086522894, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2697309228, 1086563320, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1719041260, 1086597505, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1985212426, 1086627091, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3338110550, 1086653190, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2220662760, 1086676534, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2182806990, 1086716923, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2008139464, 1086734671, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1421666193, 1086766372, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3904365844, 1086794097, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084960341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 902583259, 1086007782, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3875122155, 1086314852, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2437561735, 1086409586, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 765993277, 1086473332, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1327128914, 1086522758, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 45100834, 1086563170, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1555630935, 1086597321, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1813435161, 1086626915, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1287652765, 1086653026, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3993228130, 1086676385, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2266568718, 1086697489, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1955822723, 1086716772, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2602510365, 1086734513, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 745290028, 1086750947, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1412446299, 1086766236, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3827195545, 1086793970, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4240441345, 1085023169, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3188069835, 1086007587, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3659470694, 1086314632, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 144121206, 1086409486, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2414467972, 1086473232, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1611394378, 1086522663, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 83, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3539082373, 1086563059, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3643273214, 1086597220, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 313128363, 1086626783, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3741186731, 1086652937, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3238190081, 1086676283, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2488174211, 1086697402, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1366522755, 1086716678, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 164241603, 1086734413, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2275418596, 1086750839, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 402402569, 1086766118, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4000394381, 1086793850, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085286250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1350362179, 1086007912, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2171633689, 1086314941, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 437242070, 1086409659, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3006190658, 1086473416, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3915917644, 1086522849, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1497346265, 1086563227, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2727852681, 1086597430, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3547967791, 1086653126, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157446149, 1086676459, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1116848704, 1086697564, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3593636804, 1086716856, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4189464077, 1086734585, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1316446270, 1086766338, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3095421100, 1086794040, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2868903936, 1085319493, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4260387140, 1086008267, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3582798396, 1086315329, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1285822804, 1086409874, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3321414206, 1086473588, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2057201398, 1086523031, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3030254096, 1086563512, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2361111533, 1086597610, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148427473, 1086653308, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3727103494, 1086676644, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 344952119, 1086697762, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3733027226, 1086734795, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 459472221, 1086766480, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2761602602, 1086794227, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085347584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 801810412, 1086008571, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 832720799, 1086315545, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1445452888, 1086410009, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4037613007, 1086473725, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 338703794, 1086523246, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 440890128, 1086563652, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 194409856, 1086597763, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1951034082, 1086653429, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 695598379, 1086676798, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4188261335, 1086697923, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 115692050, 1086734939, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1307866405, 1086766662, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085374250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 689843061, 1086008659, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1562919325, 1086315600, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 192437981, 1086410035, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3409812094, 1086473758, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3129161191, 1086523284, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2570799127, 1086563671, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3517616704, 1086597809, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2104869098, 1086653520, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2190279866, 1086676838, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3723136193, 1086734980, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1113679089, 1086766707, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085390250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2178502463, 1086008761, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 722961867, 1086410075, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 503457579, 1086473797, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1803081132, 1086523322, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1017373580, 1086563709, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 873081333, 1086597854, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3760898659, 1086653568, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3528794153, 1086676888, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3468954531, 1086735049, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1996488704, 1085435710, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3851644948, 1086008833, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 989476917, 1086410119, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2986873657, 1086473841, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 89018829, 1086523374, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3894360099, 1086563753, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2738191684, 1086597901, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3977167817, 1086676945, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085462250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4021569939, 1086008955, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157682600, 1086410168, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2323847969, 1086473989, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2705422552, 1086523428, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3592023863, 1086563810, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 659086994, 1086597959, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3108910011, 1086677008, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085507584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3998506500, 1086009123, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 502543187, 1086410252, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4220183720, 1086474078, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3016857675, 1086523514, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276984072, 1086563896, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2885298813, 1086677103, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085590250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1126944945, 1086009312, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 91245062, 1086474176, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1092975327, 1086523606, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1207736957, 1086563993, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2625921563, 1086677181, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2290089984, 1085641405, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 900758502, 1086009467, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1519583510, 1086474252, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 606554684, 1086523681, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2446230958, 1086564073, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3677225053, 1086677280, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085680917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3559484995, 1086009541, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2717081234, 1086474288, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3173461469, 1086523719, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3959717309, 1086564110, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3655769114, 1086677312, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085696917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3179456337, 1086009564, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1941183548, 1086474315, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2481358717, 1086523745, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 77067571, 1086564136, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085723584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 314540864, 1086009622, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3639080681, 1086474329, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2592079872, 1085777027, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3176710950, 1086009587, "_x_x_x_x_bach_float64_x_x_x_x_", 2952790016, 1080090508, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085811584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1443543665, 1086009526, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1082081280, 80, 0, "]", 0, "]", 0, "]" ],
													"whole_roll_data_count" : [ 1 ],
													"zoom" : 50.0
												}

											}
, 											{
												"box" : 												{
													"comment" : "llll: Reversed Score",
													"id" : "obj-2",
													"index" : 1,
													"maxclass" : "outlet",
													"numinlets" : 1,
													"numoutlets" : 0,
													"patching_rect" : [ 104.960163100106371, 924.354626376305077, 25.0, 25.0 ]
												}

											}
, 											{
												"box" : 												{
													"comment" : "llll: Original Score",
													"id" : "obj-1",
													"index" : 1,
													"maxclass" : "inlet",
													"numinlets" : 0,
													"numoutlets" : 1,
													"outlettype" : [ "" ],
													"patching_rect" : [ 16.5, 11.0, 25.0, 25.0 ]
												}

											}
 ],
										"lines" : [ 											{
												"patchline" : 												{
													"destination" : [ "obj-5", 0 ],
													"source" : [ "obj-1", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-16", 0 ],
													"source" : [ "obj-10", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 5 ],
													"source" : [ "obj-11", 5 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 4 ],
													"source" : [ "obj-11", 4 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 3 ],
													"source" : [ "obj-11", 3 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 1 ],
													"source" : [ "obj-11", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-125", 1 ],
													"source" : [ "obj-11", 6 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-125", 3 ],
													"order" : 0,
													"source" : [ "obj-11", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-126", 1 ],
													"order" : 1,
													"source" : [ "obj-11", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-9", 0 ],
													"source" : [ "obj-113", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-114", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 0 ],
													"source" : [ "obj-115", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-114", 0 ],
													"source" : [ "obj-115", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-125", 4 ],
													"order" : 0,
													"source" : [ "obj-115", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-126", 2 ],
													"order" : 1,
													"source" : [ "obj-115", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-15", 0 ],
													"source" : [ "obj-12", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-51", 0 ],
													"source" : [ "obj-12", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 5 ],
													"source" : [ "obj-123", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 6 ],
													"source" : [ "obj-125", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-127", 0 ],
													"source" : [ "obj-126", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 2 ],
													"source" : [ "obj-127", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-125", 0 ],
													"source" : [ "obj-127", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-115", 0 ],
													"source" : [ "obj-13", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-14", 0 ],
													"source" : [ "obj-13", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-113", 0 ],
													"source" : [ "obj-14", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 0 ],
													"source" : [ "obj-15", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-3", 0 ],
													"source" : [ "obj-16", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-56", 0 ],
													"midpoints" : [ 71.75, 143.5, 682.5714111328125, 143.5 ],
													"source" : [ "obj-16", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-5", 2 ],
													"source" : [ "obj-17", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-19", 0 ],
													"source" : [ "obj-18", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-39", 0 ],
													"source" : [ "obj-18", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-39", 0 ],
													"source" : [ "obj-18", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-24", 0 ],
													"source" : [ "obj-19", 3 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-24", 0 ],
													"source" : [ "obj-19", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-24", 0 ],
													"source" : [ "obj-19", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-24", 0 ],
													"source" : [ "obj-19", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-19", 7 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-19", 6 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-19", 5 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-25", 0 ],
													"source" : [ "obj-19", 4 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-28", 0 ],
													"source" : [ "obj-19", 8 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-67", 1 ],
													"order" : 1,
													"source" : [ "obj-20", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-7", 1 ],
													"order" : 0,
													"source" : [ "obj-20", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-29", 0 ],
													"source" : [ "obj-24", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-29", 0 ],
													"source" : [ "obj-25", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-29", 0 ],
													"source" : [ "obj-28", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"color" : [ 0.821192800998688, 0.0, 0.033865857869387, 1.0 ],
													"destination" : [ "obj-123", 2 ],
													"order" : 2,
													"source" : [ "obj-29", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"color" : [ 0.821192800998688, 0.0, 0.033865857869387, 1.0 ],
													"destination" : [ "obj-125", 2 ],
													"order" : 0,
													"source" : [ "obj-29", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"color" : [ 0.821192800998688, 0.0, 0.033865857869387, 1.0 ],
													"destination" : [ "obj-126", 0 ],
													"order" : 1,
													"source" : [ "obj-29", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"color" : [ 0.821192800998688, 0.0, 0.033865857869387, 1.0 ],
													"destination" : [ "obj-89", 0 ],
													"order" : 3,
													"source" : [ "obj-29", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-6", 0 ],
													"source" : [ "obj-3", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-68", 0 ],
													"source" : [ "obj-3", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-20", 2 ],
													"source" : [ "obj-39", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-123", 1 ],
													"source" : [ "obj-4", 5 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-123", 3 ],
													"order" : 0,
													"source" : [ "obj-4", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 4 ],
													"source" : [ "obj-4", 4 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 3 ],
													"source" : [ "obj-4", 3 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 1 ],
													"source" : [ "obj-4", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-89", 1 ],
													"order" : 1,
													"source" : [ "obj-4", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-9", 0 ],
													"source" : [ "obj-45", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-10", 0 ],
													"source" : [ "obj-5", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-18", 0 ],
													"order" : 0,
													"source" : [ "obj-5", 5 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-20", 0 ],
													"source" : [ "obj-5", 4 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-20", 1 ],
													"source" : [ "obj-5", 3 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-20", 0 ],
													"source" : [ "obj-5", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-61", 1 ],
													"order" : 1,
													"source" : [ "obj-5", 5 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-123", 4 ],
													"order" : 0,
													"source" : [ "obj-51", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 0 ],
													"source" : [ "obj-51", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-58", 0 ],
													"source" : [ "obj-51", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-89", 2 ],
													"order" : 1,
													"source" : [ "obj-51", 2 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-14", 1 ],
													"order" : 0,
													"source" : [ "obj-56", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-15", 1 ],
													"order" : 1,
													"source" : [ "obj-56", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-4", 0 ],
													"source" : [ "obj-58", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-11", 0 ],
													"source" : [ "obj-6", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-7", 0 ],
													"source" : [ "obj-6", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-5", 1 ],
													"source" : [ "obj-64", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-12", 0 ],
													"source" : [ "obj-67", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-4", 0 ],
													"source" : [ "obj-68", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-67", 0 ],
													"source" : [ "obj-68", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-13", 0 ],
													"source" : [ "obj-7", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-123", 0 ],
													"source" : [ "obj-84", 1 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-45", 2 ],
													"source" : [ "obj-84", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-84", 0 ],
													"source" : [ "obj-89", 0 ]
												}

											}
, 											{
												"patchline" : 												{
													"destination" : [ "obj-2", 0 ],
													"source" : [ "obj-9", 0 ]
												}

											}
 ],
										"styles" : [ 											{
												"name" : "default_style",
												"newobj" : 												{
													"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
													"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
													"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"button" : 												{
													"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
													"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
												}
,
												"toggle" : 												{
													"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ],
													"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
												}
,
												"parentstyle" : "",
												"multi" : 1
											}
, 											{
												"name" : "default_style-1",
												"newobj" : 												{
													"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
													"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
													"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"button" : 												{
													"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
													"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
												}
,
												"toggle" : 												{
													"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ],
													"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
												}
,
												"parentstyle" : "",
												"multi" : 0
											}
, 											{
												"name" : "master_style",
												"newobj" : 												{
													"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
													"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
													"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"attrui" : 												{
													"bgcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
													"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"button" : 												{
													"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
													"color" : [ 1.0, 0.95051, 0.0, 1.0 ],
													"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
												}
,
												"ezadc~" : 												{
													"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ],
													"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
												}
,
												"ezdac~" : 												{
													"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ],
													"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
												}
,
												"function" : 												{
													"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"multislider" : 												{
													"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"slider" : 												{
													"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
													"color" : [ 0.461105, 0.492646, 0.591878, 1.0 ],
													"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
												}
,
												"toggle" : 												{
													"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
													"color" : [ 0.0, 0.0, 0.0, 1.0 ],
													"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
												}
,
												"message" : 												{
													"bgfillcolor" : 													{
														"angle" : 270.0,
														"autogradient" : 0,
														"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
														"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
														"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
														"proportion" : 0.39,
														"type" : "gradient"
													}
,
													"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
												}
,
												"umenu" : 												{
													"bgfillcolor" : 													{
														"angle" : 270.0,
														"autogradient" : 0,
														"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
														"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
														"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
														"proportion" : 0.39,
														"type" : "gradient"
													}

												}
,
												"gain~" : 												{
													"color" : [ 1.0, 0.861448, 0.16921, 1.0 ],
													"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
												}
,
												"kslider" : 												{
													"color" : [ 1.0, 1.0, 1.0, 1.0 ],
													"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
												}
,
												"parentstyle" : "",
												"multi" : 1
											}
 ]
									}
,
									"patching_rect" : [ 26.0, 483.5, 128.0, 22.0 ],
									"saved_object_attributes" : 									{
										"description" : "",
										"digest" : "",
										"globalpatchername" : "",
										"tags" : ""
									}
,
									"text" : "p cage-stretch 1. 6700"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-7",
									"index" : 5,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 340.0, 23.000000406249995, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-6",
									"index" : 3,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 187.0, 23.000000406249995, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-5",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "dump", "float" ],
									"patching_rect" : [ 340.0, 68.33056640625, 52.0, 22.0 ],
									"text" : "t dump f"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-2",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "dump", "int" ],
									"patching_rect" : [ 187.0, 68.33056640625, 51.0, 22.0 ],
									"text" : "t dump i"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-1",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 26.0, 435.5, 71.0, 22.0 ],
									"text" : "cage.transp"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-4",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 3,
									"outlettype" : [ "dump", "int", "" ],
									"patching_rect" : [ 26.0, 68.33056640625, 61.0, 22.0 ],
									"text" : "t dump 1 l"
								}

							}
, 							{
								"box" : 								{
									"attr" : "clefs",
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-29",
									"maxclass" : "attrui",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 26.0, 111.33056640625, 150.0, 23.0 ]
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-137",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 731.5, 111.33056640625, 39.0, 22.0 ],
									"text" : "dump"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-140",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 814.0, 111.33056640625, 33.0, 22.0 ],
									"text" : "read"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-141",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 775.5, 111.33056640625, 34.0, 22.0 ],
									"text" : "write"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-130",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 2,
									"outlettype" : [ "", "" ],
									"patching_rect" : [ 26.0, 459.5, 81.0, 22.0 ],
									"text" : "cage.freqshift"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-139",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 26.0, 507.5, 97.0, 23.0 ],
									"text" : "cage.cascade~"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-36",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "dump", "int" ],
									"patching_rect" : [ 264.5, 68.33056640625, 51.0, 22.0 ],
									"text" : "t dump i"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-44",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "dump", "" ],
									"patching_rect" : [ 415.083343333333232, 68.33056640625, 51.0, 22.0 ],
									"text" : "t dump l"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-53",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "dump", "float" ],
									"patching_rect" : [ 107.0, 68.33056640625, 52.0, 22.0 ],
									"text" : "t dump f"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-69",
									"maxclass" : "newobj",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 26.0, 411.5, 97.0, 22.0 ],
									"text" : "cage.timestretch"
								}

							}
, 							{
								"box" : 								{
									"id" : "obj-72",
									"maxclass" : "message",
									"numinlets" : 2,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 690.416656666666768, 111.33056640625, 35.0, 22.0 ],
									"text" : "clear"
								}

							}
, 							{
								"box" : 								{
									"bgslots" : [ 1 ],
									"breakpointshavenoteheads" : 1,
									"bwcompatibility" : 80100,
									"clefs" : [ "FGG" ],
									"defaultnoteslots" : [ "null" ],
									"fontface" : 0,
									"fontname" : "Arial",
									"fontsize" : 12.0,
									"grid" : 1,
									"highlightplay" : 1,
									"id" : "obj-77",
									"linklyricstoslot" : 7,
									"loop" : [ 0.0, 0.0 ],
									"maxclass" : "bach.roll",
									"numinlets" : 6,
									"numoutlets" : 8,
									"numvoices" : 1,
									"out" : "nnnnnnn",
									"outlettype" : [ "", "", "", "", "", "", "", "bang" ],
									"patching_rect" : [ 26.0, 152.33056640625, 821.0, 246.666666666666657 ],
									"pitcheditrange" : [ "null" ],
									"ruler" : 2,
									"showplayhead" : 1,
									"showvelocity" : 1,
									"stafflines" : [ 5 ],
									"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
									"tonedivision" : 8,
									"versionnumber" : 80100,
									"voicenames" : [ "[", "]" ],
									"voicespacing" : [ 0.0, 17.0 ],
									"whole_roll_data_0000000000" : [ "roll", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "dB.", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 2, "[", "name", "gate", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1074266112, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 3, "[", "name", "tremolo frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076756480, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 4, "[", "name", "tremolo depth", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 5, "[", "name", "control", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 6, "[", "name", "modulation frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078525952, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 7, "[", "name", "modulation ratio", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 8, "[", "name", "filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 9, "[", "name", "spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 39322, 1069128089, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1073217536, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 10, "[", "name", "synth type", "]", "[", "type", "text", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 20, "[", "name", "slot 20", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 21, "[", "name", "slot 21", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 22, "[", "name", "slot 22", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 23, "[", "name", "slot 23", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 24, "[", "name", "slot 24", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "groups", "]", "[", "markers", "]", "[", "midichannels", 1, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3279945731, 1082001112, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2255068442, 1086010087, "_x_x_x_x_bach_float64_x_x_x_x_", 1572863996, 1082444606, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083303765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2832397054, 1086010373, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1962919990, 1086474701, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 481327639, 1086524121, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1081953280, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1083783765, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3120135694, 1086010325, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2656861149, 1086474681, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1271449544, 1086524100, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1677610141, 1086564543, "_x_x_x_x_bach_float64_x_x_x_x_", 33554440, 1080606037, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1083986432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3480184861, 1086010264, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 576215848, 1086410951, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3462815678, 1086474653, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3654319708, 1086524069, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1078243024, 1086564514, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079472128, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1084082432, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3105654056, 1086010205, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 732155261, 1086410919, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3104838044, 1086474623, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1282203995, 1086524035, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1602379112, 1086564481, "_x_x_x_x_bach_float64_x_x_x_x_", 2281701408, 1079552647, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2021654530, 1084183464, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 535287438, 1086010070, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1494361537, 1086410845, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1844552157, 1086474558, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1899766873, 1086523965, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 515743523, 1086564414, "_x_x_x_x_bach_float64_x_x_x_x_", 1946157024, 1080877893, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2474639359, 1084323848, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 346882398, 1086009853, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1300299665, 1086410726, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4232862857, 1086474452, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2642010203, 1086523849, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1974155680, 1086564298, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1513912509, 1086654136, "_x_x_x_x_bach_float64_x_x_x_x_", 3288334336, 1080464588, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084416341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1943402092, 1086009529, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 853236460, 1086410451, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3020430405, 1086474294, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3270946797, 1086523690, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1673234353, 1086564079, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3578223740, 1086598282, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148410743, 1086653941, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2464569610, 1086677328, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1850707749, 1086698418, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 584359022, 1086735449, "_x_x_x_x_bach_float64_x_x_x_x_", 3120562184, 1081105249, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2533359616, 1084550337, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4142179832, 1086009192, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 685202160, 1086316212, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 845542294, 1086410284, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1757514476, 1086474118, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2921007814, 1086523528, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2077385243, 1086563902, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4064478956, 1086598069, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1621402919, 1086653776, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2420258151, 1086677141, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3929701578, 1086698253, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1736736883, 1086735255, "_x_x_x_x_bach_float64_x_x_x_x_", 3087007744, 1080844465, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2994733056, 1084666572, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4257198534, 1086008683, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3180243994, 1086315715, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3932302843, 1086410028, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 808847812, 1086473766, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4062254433, 1086523278, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 872266964, 1086563659, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3678209178, 1086597799, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3653300449, 1086653518, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3385776772, 1086676858, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3148991369, 1086698016, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1643322750, 1086734971, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3596386156, 1086766688, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 6626361, 1086794440, "_x_x_x_x_bach_float64_x_x_x_x_", 1845493768, 1081274095, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548865, 1084821674, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 214413676, 1086008080, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1296441870, 1086315132, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3411500479, 1086409716, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2188273512, 1086473466, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276405188, 1086522894, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2697309228, 1086563320, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1719041260, 1086597505, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1985212426, 1086627091, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3338110550, 1086653190, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2220662760, 1086676534, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2182806990, 1086716923, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2008139464, 1086734671, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1421666193, 1086766372, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3904365844, 1086794097, "_x_x_x_x_bach_float64_x_x_x_x_", 4227858416, 1081142613, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418431, 1084960341, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 902583259, 1086007782, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3875122155, 1086314852, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2437561735, 1086409586, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 765993277, 1086473332, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1327128914, 1086522758, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 45100834, 1086563170, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1555630935, 1086597321, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1813435161, 1086626915, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1287652765, 1086653026, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3993228130, 1086676385, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2266568718, 1086697489, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1955822723, 1086716772, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2602510365, 1086734513, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 745290028, 1086750947, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1412446299, 1086766236, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3827195545, 1086793970, "_x_x_x_x_bach_float64_x_x_x_x_", 2684354624, 1079946643, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4240441345, 1085023169, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3188069835, 1086007587, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3659470694, 1086314632, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 144121206, 1086409486, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2414467972, 1086473232, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1611394378, 1086522663, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 83, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3539082373, 1086563059, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3643273214, 1086597220, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 313128363, 1086626783, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3741186731, 1086652937, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3238190081, 1086676283, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2488174211, 1086697402, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1366522755, 1086716678, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 164241603, 1086734413, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2275418596, 1086750839, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 402402569, 1086766118, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4000394381, 1086793850, "_x_x_x_x_bach_float64_x_x_x_x_", 251658236, 1082174541, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085286250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1350362179, 1086007912, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2171633689, 1086314941, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 437242070, 1086409659, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3006190658, 1086473416, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3915917644, 1086522849, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 82, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1497346265, 1086563227, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2727852681, 1086597430, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3547967791, 1086653126, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157446149, 1086676459, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1116848704, 1086697564, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3593636804, 1086716856, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4189464077, 1086734585, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1316446270, 1086766338, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3095421100, 1086794040, "_x_x_x_x_bach_float64_x_x_x_x_", 1476395008, 1080048481, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2868903936, 1085319493, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4260387140, 1086008267, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3582798396, 1086315329, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1285822804, 1086409874, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3321414206, 1086473588, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2057201398, 1086523031, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3030254096, 1086563512, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2361111533, 1086597610, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2148427473, 1086653308, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3727103494, 1086676644, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 344952119, 1086697762, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3733027226, 1086734795, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 459472221, 1086766480, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2761602602, 1086794227, "_x_x_x_x_bach_float64_x_x_x_x_", 1073741824, 1079733909, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085347584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 801810412, 1086008571, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 832720799, 1086315545, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1445452888, 1086410009, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4037613007, 1086473725, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 338703794, 1086523246, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 440890128, 1086563652, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 194409856, 1086597763, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1951034082, 1086653429, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 695598379, 1086676798, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4188261335, 1086697923, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 115692050, 1086734939, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1307866405, 1086766662, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085374250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 689843061, 1086008659, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1562919325, 1086315600, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 192437981, 1086410035, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3409812094, 1086473758, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3129161191, 1086523284, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2570799127, 1086563671, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3517616704, 1086597809, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2104869098, 1086653520, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2190279866, 1086676838, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3723136193, 1086734980, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1113679089, 1086766707, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085390250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2178502463, 1086008761, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 722961867, 1086410075, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 503457579, 1086473797, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1803081132, 1086523322, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 81, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1017373580, 1086563709, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 873081333, 1086597854, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3760898659, 1086653568, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3528794153, 1086676888, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3468954531, 1086735049, "_x_x_x_x_bach_float64_x_x_x_x_", 3623878656, 1080439418, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1996488704, 1085435710, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3851644948, 1086008833, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 989476917, 1086410119, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2986873657, 1086473841, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 89018829, 1086523374, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3894360099, 1086563753, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2738191684, 1086597901, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3977167817, 1086676945, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1079634698, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085462250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4021569939, 1086008955, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3157682600, 1086410168, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2323847969, 1086473989, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2705422552, 1086523428, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3592023863, 1086563810, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 659086994, 1086597959, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3108910011, 1086677008, "_x_x_x_x_bach_float64_x_x_x_x_", 4160749568, 1080435371, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085507584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3998506500, 1086009123, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 502543187, 1086410252, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4220183720, 1086474078, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3016857675, 1086523514, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 4276984072, 1086563896, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2885298813, 1086677103, "_x_x_x_x_bach_float64_x_x_x_x_", 67108864, 1081355946, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2688548864, 1085590250, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1126944945, 1086009312, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 91245062, 1086474176, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1092975327, 1086523606, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1207736957, 1086563993, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2625921563, 1086677181, "_x_x_x_x_bach_float64_x_x_x_x_", 134217728, 1080621661, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2290089984, 1085641405, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 900758502, 1086009467, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1519583510, 1086474252, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 606554684, 1086523681, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2446230958, 1086564073, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3677225053, 1086677280, "_x_x_x_x_bach_float64_x_x_x_x_", 3892314112, 1080249082, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085680917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3559484995, 1086009541, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2717081234, 1086474288, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3173461469, 1086523719, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3959717309, 1086564110, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3655769114, 1086677312, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078935552, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1606418432, 1085696917, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3179456337, 1086009564, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1941183548, 1086474315, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2481358717, 1086523745, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 77067571, 1086564136, "_x_x_x_x_bach_float64_x_x_x_x_", 268435456, 1079642792, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085723584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 314540864, 1086009622, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3639080681, 1086474329, "_x_x_x_x_bach_float64_x_x_x_x_", 1342177280, 1080694899, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2592079872, 1085777027, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 3176710950, 1086009587, "_x_x_x_x_bach_float64_x_x_x_x_", 2952790016, 1080090508, 80, 0, "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085811584, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 1443543665, 1086009526, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1082081280, 80, 0, "]", 0, "]", 0, "]" ],
									"whole_roll_data_count" : [ 1 ],
									"zoom" : 36.34765625
								}

							}
, 							{
								"box" : 								{
									"attr" : "numvoices",
									"fontname" : "Arial",
									"fontsize" : 13.0,
									"id" : "obj-78",
									"maxclass" : "attrui",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"parameter_enable" : 0,
									"patching_rect" : [ 187.0, 111.33056640625, 150.0, 23.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-71",
									"index" : 1,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 26.0, 23.000000406249995, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-76",
									"index" : 6,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "list" ],
									"patching_rect" : [ 415.083343333333232, 23.000000406249995, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-133",
									"index" : 2,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 107.0, 23.000000406249995, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-135",
									"index" : 4,
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 264.5, 23.000000406249995, 30.0, 30.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-146",
									"index" : 1,
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 26.0, 537.666687000000024, 30.0, 30.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-130", 0 ],
									"source" : [ "obj-1", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-9", 0 ],
									"source" : [ "obj-10", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
									"source" : [ "obj-11", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-72", 0 ],
									"source" : [ "obj-12", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 0 ],
									"source" : [ "obj-130", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-53", 0 ],
									"source" : [ "obj-133", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-36", 0 ],
									"source" : [ "obj-135", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-137", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-146", 0 ],
									"source" : [ "obj-139", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-140", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-141", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 1 ],
									"source" : [ "obj-2", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-2", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-29", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-130", 1 ],
									"source" : [ "obj-36", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-36", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-4", 2 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-4", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"color" : [ 0.065929934382439, 0.501798808574677, 0.006832201499492, 0.654216609589041 ],
									"destination" : [ "obj-78", 0 ],
									"source" : [ "obj-4", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-139", 1 ],
									"source" : [ "obj-44", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-44", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-5", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 1 ],
									"source" : [ "obj-5", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-69", 1 ],
									"source" : [ "obj-53", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-53", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-2", 0 ],
									"source" : [ "obj-6", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-1", 0 ],
									"source" : [ "obj-69", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-5", 0 ],
									"source" : [ "obj-7", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-4", 0 ],
									"source" : [ "obj-71", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-72", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-44", 0 ],
									"source" : [ "obj-76", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-69", 0 ],
									"source" : [ "obj-77", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-77", 0 ],
									"source" : [ "obj-78", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-139", 0 ],
									"source" : [ "obj-8", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-8", 2 ],
									"source" : [ "obj-9", 0 ]
								}

							}
 ],
						"styles" : [ 							{
								"name" : "default_style",
								"newobj" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"button" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
								}
,
								"toggle" : 								{
									"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 1
							}
, 							{
								"name" : "default_style-1",
								"newobj" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"button" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
								}
,
								"toggle" : 								{
									"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 0
							}
, 							{
								"name" : "master_style",
								"newobj" : 								{
									"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"attrui" : 								{
									"bgcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"button" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 1.0, 0.95051, 0.0, 1.0 ],
									"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
								}
,
								"ezadc~" : 								{
									"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
								}
,
								"ezdac~" : 								{
									"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
								}
,
								"function" : 								{
									"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"multislider" : 								{
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"slider" : 								{
									"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
									"color" : [ 0.461105, 0.492646, 0.591878, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"toggle" : 								{
									"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
									"color" : [ 0.0, 0.0, 0.0, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"message" : 								{
									"bgfillcolor" : 									{
										"angle" : 270.0,
										"autogradient" : 0,
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
										"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
										"proportion" : 0.39,
										"type" : "gradient"
									}
,
									"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
								}
,
								"umenu" : 								{
									"bgfillcolor" : 									{
										"angle" : 270.0,
										"autogradient" : 0,
										"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
										"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
										"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
										"proportion" : 0.39,
										"type" : "gradient"
									}

								}
,
								"gain~" : 								{
									"color" : [ 1.0, 0.861448, 0.16921, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"kslider" : 								{
									"color" : [ 1.0, 1.0, 1.0, 1.0 ],
									"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
								}
,
								"parentstyle" : "",
								"multi" : 1
							}
 ]
					}
,
					"patching_rect" : [ 46.0, 572.669434000000024, 825.0, 22.0 ],
					"saved_object_attributes" : 					{
						"description" : "",
						"digest" : "",
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p multi-process"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-21",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 42.0, 237.0, 124.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 38.0, 232.842880000000093, 124.0, 20.0 ],
					"text" : "read sound analysis"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-24",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 847.0, 237.0, 100.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 511.700000000000045, 232.842880000000036, 100.0, 20.0 ],
					"text" : "filter sequences"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-32",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 525.600000000000023, 470.0, 60.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 510.600000000000023, 450.0, 60.0, 20.0 ],
					"text" : "freq shift"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"id" : "obj-26",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 203.699999999999989, 470.0, 77.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 211.199999999999989, 450.0, 77.0, 20.0 ],
					"text" : "time stretch"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"id" : "obj-30",
					"linmarkers" : [ 0.0, 11025.0, 16537.5 ],
					"logmarkers" : [ 0.0, 100.0, 1000.0, 10000.0 ],
					"maxclass" : "filtergraph~",
					"nfilters" : 1,
					"numinlets" : 8,
					"numoutlets" : 7,
					"outlettype" : [ "list", "float", "float", "float", "float", "list", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 852.0, 333.0, 191.297629047619012, 60.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 516.05118547619054, 332.842880000000036, 191.297629047619012, 60.0 ],
					"setfilter" : [ 0, 1, 1, 0, 0, 773.197265625, 52.224166870117188, 0.01541446801275, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-42",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 529.600000000000023, 531.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 496.600000000000023, 496.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-48",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 207.199999999999989, 531.0, 50.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 206.199999999999989, 496.0, 50.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-82",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 47.0, 278.0, 37.0, 23.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 81.0, 265.842880000000093, 37.0, 23.0 ],
					"text" : "read"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-127",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 70.5, 308.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 950.411108339422299, 686.866152215942407, 74.0, 47.0 ],
					"presentation" : 1,
					"presentation_linecount" : 3,
					"presentation_rect" : [ 61.5, 298.342880000000036, 74.0, 47.0 ],
					"text" : "\" q \" to play \n\" s \" to stop \n\" a \" to reset"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 14.0,
					"id" : "obj-51",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 38.721311569213867, 85.278688430786133, 608.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 28.0, 79.0, 608.0, 22.0 ],
					"text" : "Apply multiple processes to a sound analysis and distribute synthesis among connected devices."
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Avenir Roman",
					"fontsize" : 36.0,
					"id" : "obj-49",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 38.721311569213867, 27.278688430786133, 567.0, 56.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 27.0, 17.0, 567.0, 56.0 ],
					"text" : "Read and Modify a Sound Analysis"
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-54",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 31.0, 1081.482214937439039, 890.31145191192627, 339.081958770751953 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 358.842864999999961, 133.0, 54.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-53",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 935.648814523809506, 670.229507446289062, 128.743595516092228, 205.327862998351975 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 222.842865000000018, 133.0, 127.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-47",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 890.648814523809506, 452.114753723144531, 173.743595516092228, 111.213112831115723 ],
					"presentation" : 1,
					"presentation_rect" : [ 623.400006000000076, 436.999984999999924, 118.799987999999985, 98.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-74",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 485.605540037155151, 221.327892303466797, 238.54200005531311, 180.065569877624512 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.20000600000003, 222.842865000000018, 260.99998800000003, 190.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-109",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 31.0, 452.114753723144531, 149.327866554260254, 111.213112831115723 ],
					"presentation" : 1,
					"presentation_rect" : [ 188.109557999999993, 222.842865000000018, 268.666626000000008, 190.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-107",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 194.757376861572254, 452.114753723144531, 139.491801261901855, 111.213112831115723 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.20000600000003, 436.999984999999924, 118.799987999999985, 98.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-105",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 510.600000000000136, 452.114753723144531, 135.547540092468125, 111.213112831115723 ],
					"presentation" : 1,
					"presentation_rect" : [ 335.976196000000016, 436.999984999999924, 120.799987999999985, 98.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-97",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 31.0, 221.327892303466797, 334.573762893676758, 180.065569877624512 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-96",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 349.399999999999977, 452.114753723144531, 137.852457046508789, 111.213112831115723 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-44",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 665.376024007797241, 452.114753723144531, 139.491801261901855, 111.213112831115723 ],
					"presentation" : 1,
					"presentation_rect" : [ 188.109557999999993, 436.999984999999924, 122.799987999999985, 98.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.290196, 0.309804, 0.301961, 0.0 ],
					"border" : 2,
					"bordercolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"id" : "obj-80",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 836.0, 221.327892303466797, 228.392410039901733, 184.983602523803711 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 436.999984999999924, 133.0, 98.000015000000019 ],
					"proportion" : 0.39,
					"rounded" : 10
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-73",
					"maxclass" : "newobj",
					"numinlets" : 5,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 212.0, 371.0, 138.0, 23.0 ],
					"text" : "bach.scale 0 1 80 120"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-128",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 46.0, 371.0, 160.0, 23.0 ],
					"text" : "cage.sdif.chordseq.toroll"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-129",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "bang" ],
					"patching_rect" : [ 47.0, 340.0, 148.0, 23.0 ],
					"saved_object_attributes" : 					{
						"versionnumber" : 80100
					}
,
					"text" : "bach.readsdif @auto 1"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 2 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"source" : [ "obj-108", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-129", 0 ],
					"source" : [ "obj-127", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"source" : [ "obj-128", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-73", 0 ],
					"source" : [ "obj-128", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-128", 0 ],
					"source" : [ "obj-129", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-144", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"order" : 0,
					"source" : [ "obj-144", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-147", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"hidden" : 1,
					"source" : [ "obj-15", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-16", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 0 ],
					"source" : [ "obj-16", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"source" : [ "obj-169", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 4 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"source" : [ "obj-170", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-2", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"hidden" : 1,
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"hidden" : 1,
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"hidden" : 1,
					"source" : [ "obj-29", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"hidden" : 1,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 5 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-144", 0 ],
					"order" : 0,
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"order" : 1,
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 0 ],
					"source" : [ "obj-38", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-41", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 3 ],
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 1 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"midpoints" : [ 513.899999999999977, 426.081967353820801, 18.803278923034668, 426.081967353820801, 18.803278923034668, 569.196721076965332, 55.5, 569.196721076965332 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"hidden" : 1,
					"order" : 0,
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"hidden" : 1,
					"order" : 3,
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"hidden" : 1,
					"order" : 1,
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"order" : 2,
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 0 ],
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-66", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 1 ],
					"source" : [ "obj-67", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-128", 1 ],
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"hidden" : 1,
					"order" : 0,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"hidden" : 1,
					"order" : 1,
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-129", 0 ],
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"source" : [ "obj-92", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-1::obj-82::obj-10::obj-100" : [ "slider[4]", "slider[11]", 0 ],
			"obj-1::obj-82::obj-10::obj-101" : [ "slider[5]", "slider[10]", 0 ],
			"obj-1::obj-82::obj-10::obj-103" : [ "slider[16]", "slider[9]", 0 ],
			"obj-1::obj-82::obj-10::obj-112" : [ "toggle[2]", "toggle[3]", 0 ],
			"obj-1::obj-82::obj-12::obj-100" : [ "slider[8]", "slider[11]", 0 ],
			"obj-1::obj-82::obj-12::obj-101" : [ "slider[12]", "slider[10]", 0 ],
			"obj-1::obj-82::obj-12::obj-103" : [ "slider[7]", "slider[9]", 0 ],
			"obj-1::obj-82::obj-12::obj-112" : [ "toggle[5]", "toggle[3]", 0 ],
			"obj-1::obj-82::obj-7::obj-100" : [ "slider[14]", "slider[11]", 0 ],
			"obj-1::obj-82::obj-7::obj-101" : [ "slider[15]", "slider[10]", 0 ],
			"obj-1::obj-82::obj-7::obj-103" : [ "slider[13]", "slider[9]", 0 ],
			"obj-1::obj-82::obj-7::obj-112" : [ "toggle[6]", "toggle[3]", 0 ],
			"obj-1::obj-82::obj-8::obj-100" : [ "slider[3]", "slider[11]", 0 ],
			"obj-1::obj-82::obj-8::obj-101" : [ "slider[1]", "slider[10]", 0 ],
			"obj-1::obj-82::obj-8::obj-103" : [ "slider[2]", "slider[9]", 0 ],
			"obj-1::obj-82::obj-8::obj-112" : [ "toggle[1]", "toggle[3]", 0 ],
			"obj-1::obj-82::obj-9::obj-100" : [ "slider[11]", "slider[11]", 0 ],
			"obj-1::obj-82::obj-9::obj-101" : [ "slider[10]", "slider[10]", 0 ],
			"obj-1::obj-82::obj-9::obj-103" : [ "slider[9]", "slider[9]", 0 ],
			"obj-1::obj-82::obj-9::obj-112" : [ "toggle[3]", "toggle[3]", 0 ],
			"parameterbanks" : 			{

			}
,
			"inherited_shortname" : 1
		}
,
		"dependency_cache" : [ 			{
				"name" : "addDispatchToGui.js",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "addSynthsToGui.js",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "bach.+.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.-.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.args.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.beatbox.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.beatunbox.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.belong.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.change.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.collect.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.contains.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.depth.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.div.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.dx2x.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.eq.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.expr.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.f2mc.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.filter.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.filternull.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.find.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.flat.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.float2rat.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.geq.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.group.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.gt.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.insert.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.intersection.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.is.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.iter.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.join.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.keys.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.length.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.leq.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.lookup.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.lt.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.mapchord.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.mapelem.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.mc2f.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.minmax.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.neq.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.nth.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.pack.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.pick.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.playkeys.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.portal.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.pow.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.prepend.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.print.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.readsdif.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.reg.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.repeat.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.replace.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.reshape.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.rev.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.rminus.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.roll.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.rot.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.scale.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.score.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.sieve.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.slice.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.sliceheader.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.slot.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.sort.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.split.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.subs.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.sum.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.thin.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.tierev.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.times.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.trans.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.wrap.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.x2dx.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.cascade~.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.checkbachversion.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.filtercoeff~.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.freqshift.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.inferheadersyms.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.rev.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.sdif.chordseq.toroll.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.sdif.chordseq.unpack.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.timestretch.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.transp.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "defineMappingGUI.js",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "indict.js",
				"bootpath" : "~/Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"patcherrelativepath" : "../../../../Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "jscount.js",
				"bootpath" : "~/Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"patcherrelativepath" : "../../../../Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "kp.am-controls.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.buffer-controls.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.concert-mode.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.default_synth.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.dispatchStrategy.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.fm-controls.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.master-controls.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.offset-sync-time.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.sine-controls.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "kp.to_soundworks.maxpat",
				"bootpath" : "~/dev/koryphaios/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "mergeUpdates.js",
				"bootpath" : "~/Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"patcherrelativepath" : "../../../../Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "soundworks.client.js",
				"bootpath" : "~/Documents/Max 8/Packages/soundworks/javascript",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/soundworks/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "soundworks.shared-state.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/soundworks/patchers",
				"patcherrelativepath" : "../../../../Documents/Max 8/Packages/soundworks/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "sw.shared-state.maxpat",
				"bootpath" : "~/Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/patchers",
				"patcherrelativepath" : "../../../../Documents/packages/soundworks-state-manager-osc/max/SoundworksAPI/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "default_style",
				"newobj" : 				{
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"button" : 				{
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
					"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
				}
,
				"toggle" : 				{
					"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 1
			}
, 			{
				"name" : "default_style-1",
				"newobj" : 				{
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"button" : 				{
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
					"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ]
				}
,
				"toggle" : 				{
					"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "master_style",
				"newobj" : 				{
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"attrui" : 				{
					"bgcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"button" : 				{
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
					"color" : [ 1.0, 0.95051, 0.0, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"ezadc~" : 				{
					"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
				}
,
				"ezdac~" : 				{
					"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
				}
,
				"function" : 				{
					"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"multislider" : 				{
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"slider" : 				{
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"color" : [ 0.461105, 0.492646, 0.591878, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"toggle" : 				{
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"message" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0,
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
						"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
						"proportion" : 0.39,
						"type" : "gradient"
					}
,
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ]
				}
,
				"umenu" : 				{
					"bgfillcolor" : 					{
						"angle" : 270.0,
						"autogradient" : 0,
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
						"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
						"proportion" : 0.39,
						"type" : "gradient"
					}

				}
,
				"gain~" : 				{
					"color" : [ 1.0, 0.861448, 0.16921, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"kslider" : 				{
					"color" : [ 1.0, 1.0, 1.0, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 1
			}
 ]
	}

}
