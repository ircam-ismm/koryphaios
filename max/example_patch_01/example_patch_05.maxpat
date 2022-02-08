{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 1,
			"revision" : 11,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 233.0, 79.0, 1575.0, 1512.0 ],
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
		"boxes" : [ 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-11",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "to_soundworks.maxpat",
					"numinlets" : 1,
					"numoutlets" : 0,
					"offset" : [ -18.0, -16.0 ],
					"patching_rect" : [ 24.0, 377.0, 628.0, 286.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-34",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 849.0, 95.0, 65.0, 22.0 ],
					"text" : "s transport"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-92",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 767.083333333333258, 65.0, 41.0, 22.0 ],
					"text" : "pause"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-65",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 959.5, 65.0, 87.0, 22.0 ],
					"text" : "loadmess 0.25"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 0,
					"patching_rect" : [ 975.5, 321.0, 48.25, 22.0 ],
					"text" : "dac~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"lastchannelcount" : 0,
					"maxclass" : "live.gain~",
					"numinlets" : 2,
					"numoutlets" : 5,
					"outlettype" : [ "signal", "signal", "", "float", "list" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 975.5, 183.0, 47.0, 136.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_initial" : [ 0.0 ],
							"parameter_longname" : "live.gain~",
							"parameter_mmax" : 6.0,
							"parameter_mmin" : -70.0,
							"parameter_shortname" : "live.gain~",
							"parameter_type" : 0,
							"parameter_unitstyle" : 4
						}

					}
,
					"varname" : "live.gain~[1]"
				}

			}
, 			{
				"box" : 				{
					"format" : 6,
					"id" : "obj-8",
					"maxclass" : "flonum",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 972.0, 135.0, 54.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 972.0, 159.0, 53.5, 22.0 ],
					"text" : "*~"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-60",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "" ],
					"patching_rect" : [ 949.0, 111.0, 103.0, 22.0 ],
					"text" : "cage.ezsynth~ 20"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 611.583343333333232, 65.0, 39.0, 22.0 ],
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
					"patching_rect" : [ 732.083343333333232, 65.0, 31.0, 22.0 ],
					"text" : "play"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-67",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 694.083343333333232, 65.0, 33.0, 22.0 ],
					"text" : "read"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-66",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 655.583343333333232, 65.0, 34.0, 22.0 ],
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
					"patching_rect" : [ 814.0, 65.0, 31.0, 22.0 ],
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
					"patching_rect" : [ 806.0, 38.0, 39.0, 22.0 ],
					"text" : "r stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-62",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1087.0, 77.0, 69.0, 20.0 ],
					"text" : "\" s \" to stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-59",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1098.5, 150.5, 41.0, 22.0 ],
					"text" : "s stop"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-58",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 1098.5, 124.5, 46.0, 22.0 ],
					"text" : "sel 115"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-52",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 4,
					"outlettype" : [ "int", "int", "int", "int" ],
					"patching_rect" : [ 1098.5, 99.0, 50.5, 22.0 ],
					"text" : "key"
				}

			}
, 			{
				"box" : 				{
					"fontsize" : 14.0,
					"id" : "obj-51",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 25.0, 53.0, 504.0, 22.0 ],
					"text" : "Frequency, velocity, duration, envelope and other data from bach to soundworks"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontsize" : 24.0,
					"id" : "obj-49",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 24.0, 19.0, 213.0, 33.0 ],
					"text" : "Example Patch 01"
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
					"linklyricstoslot" : 7,
					"loop" : [ 0.0, 0.0 ],
					"maxclass" : "bach.roll",
					"numinlets" : 6,
					"numoutlets" : 8,
					"numvoices" : 1,
					"out" : "nnnnnnn",
					"outlettype" : [ "", "", "", "", "", "", "", "bang" ],
					"patching_rect" : [ 24.0, 99.0, 824.0, 246.666666666666657 ],
					"pitcheditrange" : [ "null" ],
					"ruler" : 2,
					"showplayhead" : 1,
					"stafflines" : [ 5 ],
					"textcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"tonedivision" : 8,
					"versionnumber" : 80100,
					"voicenames" : [ "[", "]" ],
					"voicespacing" : [ 0.0, 17.0 ],
					"whole_roll_data_0000000000" : [ "roll", "[", "slotinfo", "[", 1, "[", "name", "amplitude envelope", "]", "[", "type", "function", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1075314688, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "dB", "]", "[", "grid", "]", "[", "ysnap", "]", "[", "domain", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "domainslope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 2, "[", "name", "gate", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1074266112, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 3, "[", "name", "tremolo frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1076756480, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 4, "[", "name", "tremolo depth", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 5, "[", "name", "control", "]", "[", "type", "int", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080016896, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078984704, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 6, "[", "name", "modulation frequency", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1078525952, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 7, "[", "name", "modulation ratio", "]", "[", "type", "float", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "default", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1077477376, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 8, "[", "name", "filelist", "]", "[", "type", "filelist", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1080213504, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 9, "[", "name", "spat", "]", "[", "type", "spat", "]", "[", "key", 0, "]", "[", "range", "_x_x_x_x_bach_float64_x_x_x_x_", 39322, 1069128089, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1073217536, "]", "[", "slope", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "representation", "]", "[", "temporalmode", "relative", "]", "[", "extend", 0, "]", "[", "width", "duration", "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 10, "[", "name", "slot 10", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 11, "[", "name", "slot 11", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 12, "[", "name", "slot 12", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 13, "[", "name", "slot 13", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 14, "[", "name", "slot 14", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 15, "[", "name", "slot 15", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 16, "[", "name", "slot 16", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 17, "[", "name", "slot 17", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 18, "[", "name", "slot 18", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 19, "[", "name", "slot 19", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 20, "[", "name", "slot 20", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 21, "[", "name", "slot 21", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 0, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 22, "[", "name", "slot 22", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 23, "[", "name", "slot 23", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 24, "[", "name", "slot 24", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 25, "[", "name", "slot 25", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 26, "[", "name", "slot 26", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 27, "[", "name", "slot 27", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 28, "[", "name", "slot 28", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 29, "[", "name", "slot 29", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "[", 30, "[", "name", "slot 30", "]", "[", "type", "none", "]", "[", "key", 0, "]", "[", "temporalmode", "none", "]", "[", "extend", 0, "]", "[", "width", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1079574528, "]", "[", "height", "auto", "]", "[", "copywhensplit", 1, "]", "[", "access", "readandwrite", "]", "[", "follownotehead", 0, "]", "]", "]", "[", "commands", "[", 1, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 2, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 3, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 4, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "[", 5, "[", "note", "note", "]", "[", "chord", "chord", "]", "[", "rest", "rest", "]", "[", "key", 0, "]", "]", "]", "[", "groups", "]", "[", "markers", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 65530, 1082894334, "granular", "none", "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 65532, 1086214399, "[", "addsynth", 2, "]", "none", "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 15424, 1087391061, "[", "marker", 1, "]", "none", "]", "]", "[", "midichannels", 1, "]", "[", "articulationinfo", "]", "[", "noteheadinfo", "]", "[", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 446526, 1083186176, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1085801984, "_x_x_x_x_bach_float64_x_x_x_x_", 102127, 1084707256, 74, "[", "breakpoints", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3224961024, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "]", "[", "slots", "[", 1, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 660, 1044723673, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 660, 1044723673, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1075314688, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "]", "[", 2, 3, "]", "[", 3, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", 4, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", 5, 6, "]", "[", 6, "_x_x_x_x_bach_float64_x_x_x_x_", 34578, 1077019541, "]", "[", 7, "_x_x_x_x_bach_float64_x_x_x_x_", 56046, 1074844663, "]", "]", 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1086402560, "_x_x_x_x_bach_float64_x_x_x_x_", 51062, 1085362908, 6, "[", "slots", "[", 1, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 660, 1044723673, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 660, 1044723673, "_x_x_x_x_bach_float64_x_x_x_x_", 4294967264, 1075314687, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", "_x_x_x_x_bach_float64_x_x_x_x_", 0, 1072693248, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 3226566656, "_x_x_x_x_bach_float64_x_x_x_x_", 1374515368, 1070638038, "]", "]", "[", 3, "_x_x_x_x_bach_float64_x_x_x_x_", 51527, 1074630072, "]", "[", 4, "_x_x_x_x_bach_float64_x_x_x_x_", 22654, 1071716562, "]", "[", 5, 40, "]", "[", 6, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", 7, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, "]", "[", 9, "[", "_x_x_x_x_bach_float64_x_x_x_x_", 2872034211, 1071921260, "_x_x_x_x_bach_float64_x_x_x_x_", 2236962951, 1072728200, "_x_x_x_x_bach_float64_x_x_x_x_", 0, 0, 0, "]", "]", "]", 0, "]", 0, "]", 0, "]" ],
					"whole_roll_data_count" : [ 1 ],
					"zoom" : 15.0
				}

			}
, 			{
				"box" : 				{
					"angle" : 270.0,
					"background" : 1,
					"bgcolor" : [ 0.76078431372549, 0.784313725490196, 0.796078431372549, 1.0 ],
					"bordercolor" : [ 0.600000083446503, 0.600000023841858, 0.599999964237213, 1.0 ],
					"id" : "obj-61",
					"maxclass" : "panel",
					"mode" : 0,
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 926.0, 99.0, 154.0, 252.833327999999995 ],
					"proportion" : 0.5
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"order" : 1,
					"source" : [ "obj-2", 6 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"order" : 0,
					"source" : [ "obj-2", 6 ]
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
					"destination" : [ "obj-58", 0 ],
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 0 ],
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"source" : [ "obj-60", 0 ]
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
					"order" : 1,
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 0 ],
					"midpoints" : [ 823.5, 93.0 ],
					"order" : 0,
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"source" : [ "obj-65", 0 ]
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
					"destination" : [ "obj-2", 0 ],
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
					"destination" : [ "obj-5", 1 ],
					"source" : [ "obj-7", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 1 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 1 ],
					"order" : 0,
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"order" : 1,
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"order" : 1,
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 0 ],
					"midpoints" : [ 776.583333333333258, 93.0 ],
					"order" : 0,
					"source" : [ "obj-92", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-11::obj-82::obj-10::obj-83" : [ "slider[5]", "slider[5]", 0 ],
			"obj-11::obj-82::obj-10::obj-84" : [ "slider[4]", "slider[4]", 0 ],
			"obj-11::obj-82::obj-10::obj-85" : [ "slider[3]", "slider[3]", 0 ],
			"obj-11::obj-82::obj-10::obj-98" : [ "toggle[1]", "toggle[1]", 0 ],
			"obj-11::obj-82::obj-11::obj-114" : [ "slider[8]", "slider[8]", 0 ],
			"obj-11::obj-82::obj-11::obj-115" : [ "slider[7]", "slider[7]", 0 ],
			"obj-11::obj-82::obj-11::obj-116" : [ "slider[6]", "slider[6]", 0 ],
			"obj-11::obj-82::obj-11::obj-125" : [ "toggle[2]", "toggle[2]", 0 ],
			"obj-11::obj-82::obj-12::obj-114" : [ "slider[13]", "slider[8]", 0 ],
			"obj-11::obj-82::obj-12::obj-115" : [ "slider[12]", "slider[7]", 0 ],
			"obj-11::obj-82::obj-12::obj-116" : [ "slider[14]", "slider[6]", 0 ],
			"obj-11::obj-82::obj-12::obj-125" : [ "toggle[4]", "toggle[2]", 0 ],
			"obj-11::obj-82::obj-8::obj-33" : [ "toggle", "toggle", 0 ],
			"obj-11::obj-82::obj-8::obj-79" : [ "slider", "slider", 0 ],
			"obj-11::obj-82::obj-8::obj-80" : [ "slider[1]", "slider[1]", 0 ],
			"obj-11::obj-82::obj-8::obj-81" : [ "slider[2]", "slider[2]", 0 ],
			"obj-11::obj-82::obj-9::obj-100" : [ "slider[11]", "slider[11]", 0 ],
			"obj-11::obj-82::obj-9::obj-101" : [ "slider[10]", "slider[10]", 0 ],
			"obj-11::obj-82::obj-9::obj-103" : [ "slider[9]", "slider[9]", 0 ],
			"obj-11::obj-82::obj-9::obj-112" : [ "toggle[3]", "toggle[3]", 0 ],
			"obj-7" : [ "live.gain~", "live.gain~", 0 ],
			"parameterbanks" : 			{

			}
,
			"inherited_shortname" : 1
		}
,
		"parameter_map" : 		{
			"midi" : 			{
				"toggle" : 				{
					"srcname" : "48.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 1.0,
					"flags" : 2
				}
,
				"toggle[1]" : 				{
					"srcname" : "50.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 1.0,
					"flags" : 2
				}
,
				"toggle[3]" : 				{
					"srcname" : "52.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 1.0,
					"flags" : 2
				}
,
				"toggle[2]" : 				{
					"srcname" : "54.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 1.0,
					"flags" : 2
				}
,
				"slider" : 				{
					"srcname" : "0.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[1]" : 				{
					"srcname" : "16.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[2]" : 				{
					"srcname" : "17.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[3]" : 				{
					"srcname" : "2.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[4]" : 				{
					"srcname" : "18.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[5]" : 				{
					"srcname" : "19.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[9]" : 				{
					"srcname" : "4.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[10]" : 				{
					"srcname" : "20.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[11]" : 				{
					"srcname" : "21.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[6]" : 				{
					"srcname" : "6.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[7]" : 				{
					"srcname" : "22.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}
,
				"slider[8]" : 				{
					"srcname" : "23.ctrl.0.chan.midi",
					"min" : 0.0,
					"max" : 127.0,
					"flags" : 2
				}

			}

		}
,
		"dependency_cache" : [ 			{
				"name" : "cage.ezsynth~.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.ezsynth_poly.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.slot2curve.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.times.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.x2dx.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.filternull.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.dl2curve.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.+.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.mc2f.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/bach/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/bach/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "cage.checkbachversion.maxpat",
				"bootpath" : "~/Documents/Max 8/Packages/cage/patchers",
				"patcherrelativepath" : "../../../../Max 8/Packages/cage/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "to_soundworks.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "sw.shared-state.maxpat",
				"bootpath" : "~/Documents/soundworks/soundworks-state-manager-osc/max/SoundworksAPI/patchers",
				"patcherrelativepath" : "../../../soundworks-state-manager-osc/max/SoundworksAPI/patchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "jscount.js",
				"bootpath" : "~/Documents/soundworks/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"patcherrelativepath" : "../../../soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "indict.js",
				"bootpath" : "~/Documents/soundworks/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"patcherrelativepath" : "../../../soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "mergeUpdates.js",
				"bootpath" : "~/Documents/soundworks/soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"patcherrelativepath" : "../../../soundworks-state-manager-osc/max/SoundworksAPI/javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "default_synth.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "concert-mode.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "dispatchStrategy.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "offset-sync-time.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "global-controls.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "am-controls.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "sine-controls.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "fm-controls.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "granular-controls.maxpat",
				"bootpath" : "~/Documents/soundworks/color_fields_v2/max/bpatchers",
				"patcherrelativepath" : "../bpatchers",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "bach.roll.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.keys.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.trans.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.pick.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.expr.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.portal.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.args.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.iter.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.collect.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.flat.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.slice.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.lace.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.reg.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.eq.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.gt.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.join.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.nth.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.is.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.length.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.print.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.playkeys.mxo",
				"type" : "iLaX"
			}
, 			{
				"name" : "bach.wrap.mxo",
				"type" : "iLaX"
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "default_style",
				"toggle" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"button" : 				{
					"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ],
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ]
				}
,
				"newobj" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 1
			}
, 			{
				"name" : "default_style-1",
				"toggle" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.636487, 0.648652, 0.683149, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"button" : 				{
					"color" : [ 0.960784, 0.827451, 0.156863, 1.0 ],
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ]
				}
,
				"newobj" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
, 			{
				"name" : "master_style",
				"toggle" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"ezadc~" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
				}
,
				"gain~" : 				{
					"color" : [ 1.0, 0.861448, 0.16921, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"ezdac~" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
					"elementcolor" : [ 0.862745, 0.870588, 0.878431, 1.0 ]
				}
,
				"kslider" : 				{
					"color" : [ 1.0, 1.0, 1.0, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"slider" : 				{
					"color" : [ 0.461105, 0.492646, 0.591878, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"elementcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"multislider" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ]
				}
,
				"function" : 				{
					"color" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"button" : 				{
					"color" : [ 1.0, 0.95051, 0.0, 1.0 ],
					"bgcolor" : [ 0.682032, 0.698052, 0.748716, 1.0 ],
					"elementcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"attrui" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 0.786675, 0.801885, 0.845022, 1.0 ]
				}
,
				"newobj" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgcolor" : [ 1.0, 1.0, 1.0, 1.0 ],
					"accentcolor" : [ 0.65098, 0.666667, 0.662745, 1.0 ]
				}
,
				"message" : 				{
					"textcolor_inverse" : [ 0.0, 0.0, 0.0, 1.0 ],
					"bgfillcolor" : 					{
						"type" : "gradient",
						"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
						"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"umenu" : 				{
					"bgfillcolor" : 					{
						"type" : "gradient",
						"color1" : [ 0.786675, 0.801885, 0.845022, 1.0 ],
						"color2" : [ 0.65098, 0.666667, 0.662745, 1.0 ],
						"color" : [ 0.290196, 0.309804, 0.301961, 1.0 ],
						"angle" : 270.0,
						"proportion" : 0.39,
						"autogradient" : 0
					}

				}
,
				"parentstyle" : "",
				"multi" : 1
			}
 ]
	}

}
