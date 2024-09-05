/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';

////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
let contenido = document.getElementById("contenedor");
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga la Oferta Educativa
export function ofertaEducativa() {

    var elemento_1 = document.createElement('DIV');
    elemento_1.setAttribute('class', ' bd-postcontent-2 bd-tagstyles bd-custom-blockquotes bd-contentlayout-offset');
    elemento_1.setAttribute('itemprop', 'articleBody');

    var elemento_2 = document.createElement('TABLE');
    elemento_2.setAttribute('style', 'margin-left: auto; margin-right: auto; width: 645px; border-color: rgb(0, 0, 0); --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273;');
    elemento_2.setAttribute('border', '10');
    elemento_2.setAttribute('data-darkreader-inline-border-top', '');
    elemento_2.setAttribute('data-darkreader-inline-border-right', '');
    elemento_2.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_2.setAttribute('data-darkreader-inline-border-left', '');
    elemento_1.appendChild(elemento_2);

    var elemento_3 = document.createElement('TBODY');
    elemento_2.appendChild(elemento_3);

    var elemento_4 = document.createElement('TR');
    elemento_4.setAttribute('style', 'border-color: rgb(0, 0, 0); border-top-width: thick; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273;');
    elemento_4.setAttribute('data-darkreader-inline-border-top', '');
    elemento_4.setAttribute('data-darkreader-inline-border-right', '');
    elemento_4.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_4.setAttribute('data-darkreader-inline-border-left', '');
    elemento_3.appendChild(elemento_4);

    var elemento_5 = document.createElement('TD');
    elemento_5.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(212, 203, 203); width: 305.5px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#333739;');
    elemento_5.setAttribute('data-darkreader-inline-border-top', '');
    elemento_5.setAttribute('data-darkreader-inline-border-right', '');
    elemento_5.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_5.setAttribute('data-darkreader-inline-border-left', '');
    elemento_5.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_4.appendChild(elemento_5);

    var elemento_6 = document.createElement('P');
    elemento_6.setAttribute('style', 'text-align: center;');
    elemento_5.appendChild(elemento_6);

    var elemento_7 = document.createElement('STRONG');
    elemento_6.appendChild(elemento_7);

    var elemento_8 = document.createTextNode((new String("EDUCACIÓN SECUNDARIA OBLIGATORIA")));
    elemento_7.appendChild(elemento_8);

    var elemento_9 = document.createElement('P');
    elemento_9.setAttribute('style', 'text-align: center;');
    elemento_5.appendChild(elemento_9);

    var elemento_10 = document.createElement('A');
    elemento_10.setAttribute('href', '/images/oferta_educativa/OFERTAEDUCATIVA2018-2019.pdf');
    elemento_10.setAttribute('target', '_blank');
    elemento_10.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_9.appendChild(elemento_10);

    var elemento_11 = document.createTextNode((new String("Descargar la Oferta Educativa de ESO y\\n                            Bachillerato")));
    elemento_10.appendChild(elemento_11);

    var elemento_12 = document.createElement('P');
    elemento_12.setAttribute('style', 'text-align: center;');
    elemento_5.appendChild(elemento_12);

    var elemento_13 = document.createElement('A');
    elemento_13.setAttribute('href', '/images/oferta_educativa/INF.MATERIAS-ESO.pdf');
    elemento_13.setAttribute('target', '_blank');
    elemento_13.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_12.appendChild(elemento_13);

    var elemento_14 = document.createTextNode((new String("Descargar información materias\\n                            optativas ")));
    elemento_13.appendChild(elemento_14);

    var elemento_15 = document.createElement('TD');
    elemento_15.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); width: 325px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#181a1b;');
    elemento_15.setAttribute('data-darkreader-inline-border-top', '');
    elemento_15.setAttribute('data-darkreader-inline-border-right', '');
    elemento_15.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_15.setAttribute('data-darkreader-inline-border-left', '');
    elemento_15.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_4.appendChild(elemento_15);

    var elemento_16 = document.createElement('TABLE');
    elemento_16.setAttribute('style', 'width: 324.5px; height: 142px; border-color: rgb(0, 0, 0); --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273;');
    elemento_16.setAttribute('border', '1');
    elemento_16.setAttribute('data-darkreader-inline-border-top', '');
    elemento_16.setAttribute('data-darkreader-inline-border-right', '');
    elemento_16.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_16.setAttribute('data-darkreader-inline-border-left', '');
    elemento_15.appendChild(elemento_16);

    var elemento_17 = document.createElement('TBODY');
    elemento_16.appendChild(elemento_17);

    var elemento_18 = document.createElement('TR');
    elemento_17.appendChild(elemento_18);

    var elemento_19 = document.createElement('TD');
    elemento_19.setAttribute('style', 'width: 110.183px; text-align: center;');
    elemento_18.appendChild(elemento_19);

    var elemento_20 = document.createElement('STRONG');
    elemento_19.appendChild(elemento_20);

    var elemento_21 = document.createTextNode((new String("1º ESO")));
    elemento_20.appendChild(elemento_21);

    var elemento_22 = document.createElement('TD');
    elemento_22.setAttribute('style', 'width: 199.817px;');
    elemento_18.appendChild(elemento_22);

    var elemento_23 = document.createElement('TR');
    elemento_17.appendChild(elemento_23);

    var elemento_24 = document.createElement('TD');
    elemento_24.setAttribute('style', 'width: 110.183px; text-align: center;');
    elemento_23.appendChild(elemento_24);

    var elemento_25 = document.createElement('STRONG');
    elemento_24.appendChild(elemento_25);

    var elemento_26 = document.createTextNode((new String("2º ESO")));
    elemento_25.appendChild(elemento_26);

    var elemento_27 = document.createElement('TD');
    elemento_27.setAttribute('style', 'width: 199.817px;');
    elemento_23.appendChild(elemento_27);

    var elemento_28 = document.createElement('TR');
    elemento_17.appendChild(elemento_28);

    var elemento_29 = document.createElement('TD');
    elemento_29.setAttribute('style', 'width: 110.183px; text-align: center;');
    elemento_28.appendChild(elemento_29);

    var elemento_30 = document.createElement('STRONG');
    elemento_29.appendChild(elemento_30);

    var elemento_31 = document.createTextNode((new String("3º ESO")));
    elemento_30.appendChild(elemento_31);

    var elemento_32 = document.createElement('TD');
    elemento_32.setAttribute('style', 'text-align: center; width: 199.817px;');
    elemento_32.setAttribute('rowspan', '2');
    elemento_28.appendChild(elemento_32);

    var elemento_33 = document.createElement('STRONG');
    elemento_32.appendChild(elemento_33);

    var elemento_34 = document.createElement('IMG');
    elemento_34.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto;');
    elemento_34.setAttribute('src', 'IMG/fse.jpg');
    elemento_34.setAttribute('alt', '');
    elemento_34.setAttribute('width', '184');
    elemento_34.setAttribute('height', '55');
    elemento_33.appendChild(elemento_34);

    var elemento_35 = document.createTextNode((new String("Estudios cofinanciados\\n                                        por el fondo social europeo")));
    elemento_33.appendChild(elemento_35);

    var elemento_36 = document.createElement('TR');
    elemento_17.appendChild(elemento_36);

    var elemento_37 = document.createElement('TD');
    elemento_37.setAttribute('style', 'width: 110.183px; text-align: center;');
    elemento_36.appendChild(elemento_37);

    var elemento_38 = document.createElement('STRONG');
    elemento_37.appendChild(elemento_38);

    var elemento_39 = document.createTextNode((new String("4º ESO")));
    elemento_38.appendChild(elemento_39);

    var elemento_40 = document.createElement('TR');
    elemento_40.setAttribute('style', 'border-color: rgb(0, 0, 0); --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273;');
    elemento_40.setAttribute('data-darkreader-inline-border-top', '');
    elemento_40.setAttribute('data-darkreader-inline-border-right', '');
    elemento_40.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_40.setAttribute('data-darkreader-inline-border-left', '');
    elemento_3.appendChild(elemento_40);

    var elemento_41 = document.createElement('TD');
    elemento_41.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(212, 203, 203); width: 305.5px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#333739;');
    elemento_41.setAttribute('data-darkreader-inline-border-top', '');
    elemento_41.setAttribute('data-darkreader-inline-border-right', '');
    elemento_41.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_41.setAttribute('data-darkreader-inline-border-left', '');
    elemento_41.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_40.appendChild(elemento_41);

    var elemento_42 = document.createElement('P');
    elemento_42.setAttribute('style', 'text-align: center;');
    elemento_41.appendChild(elemento_42);

    var elemento_43 = document.createElement('STRONG');
    elemento_42.appendChild(elemento_43);

    var elemento_44 = document.createTextNode((new String("BACHILLERATO")));
    elemento_43.appendChild(elemento_44);

    var elemento_45 = document.createElement('P');
    elemento_45.setAttribute('style', 'text-align: center;');
    elemento_41.appendChild(elemento_45);

    var elemento_46 = document.createElement('A');
    elemento_46.setAttribute('href', '/images/oferta_educativa/OFERTAEDUCATIVA2018-2019.pdf');
    elemento_46.setAttribute('target', '_blank');
    elemento_46.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_45.appendChild(elemento_46);

    var elemento_47 = document.createTextNode((new String("Descargar la Oferta Educativa de ESO y\\n                            Bachillerato")));
    elemento_46.appendChild(elemento_47);

    var elemento_48 = document.createElement('TD');
    elemento_48.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); width: 325px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#181a1b;');
    elemento_48.setAttribute('data-darkreader-inline-border-top', '');
    elemento_48.setAttribute('data-darkreader-inline-border-right', '');
    elemento_48.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_48.setAttribute('data-darkreader-inline-border-left', '');
    elemento_48.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_40.appendChild(elemento_48);

    var elemento_49 = document.createElement('TABLE');
    elemento_49.setAttribute('style', 'width: 323px; height: 90px;');
    elemento_49.setAttribute('border', '1');
    elemento_48.appendChild(elemento_49);

    var elemento_50 = document.createElement('TBODY');
    elemento_49.appendChild(elemento_50);

    var elemento_51 = document.createElement('TR');
    elemento_50.appendChild(elemento_51);

    var elemento_52 = document.createElement('TD');
    elemento_52.setAttribute('style', 'width: 314px; text-align: center;');
    elemento_51.appendChild(elemento_52);

    var elemento_53 = document.createElement('STRONG');
    elemento_52.appendChild(elemento_53);

    var elemento_54 = document.createTextNode((new String("1º BACHILLERATO")));
    elemento_53.appendChild(elemento_54);

    var elemento_55 = document.createElement('A');
    elemento_55.setAttribute('href', 'http://edu.jccm.es/ies/leonardo-da-vinci/images/stories/oferta/1Bachillerato.pdf');
    elemento_52.appendChild(elemento_55);

    var elemento_56 = document.createElement('BR');
    elemento_55.appendChild(elemento_56);

    var elemento_57 = document.createElement('TR');
    elemento_50.appendChild(elemento_57);

    var elemento_58 = document.createElement('TD');
    elemento_58.setAttribute('style', 'width: 314px; text-align: center;');
    elemento_57.appendChild(elemento_58);

    var elemento_59 = document.createElement('STRONG');
    elemento_58.appendChild(elemento_59);

    var elemento_60 = document.createTextNode((new String("2º BACHILLERATO")));
    elemento_59.appendChild(elemento_60);

    var elemento_61 = document.createElement('A');
    elemento_61.setAttribute('href', 'http://edu.jccm.es/ies/leonardo-da-vinci/images/stories/oferta/2Bachillerato.pdf');
    elemento_58.appendChild(elemento_61);

    var elemento_62 = document.createElement('BR');
    elemento_61.appendChild(elemento_62);

    var elemento_63 = document.createElement('TR');
    elemento_63.setAttribute('style', 'border-color: rgb(0, 0, 0); --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273;');
    elemento_63.setAttribute('data-darkreader-inline-border-top', '');
    elemento_63.setAttribute('data-darkreader-inline-border-right', '');
    elemento_63.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_63.setAttribute('data-darkreader-inline-border-left', '');
    elemento_3.appendChild(elemento_63);

    var elemento_64 = document.createElement('TD');
    elemento_64.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(212, 203, 203); width: 305.5px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#333739;');
    elemento_64.setAttribute('data-darkreader-inline-border-top', '');
    elemento_64.setAttribute('data-darkreader-inline-border-right', '');
    elemento_64.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_64.setAttribute('data-darkreader-inline-border-left', '');
    elemento_64.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_63.appendChild(elemento_64);

    var elemento_65 = document.createElement('P');
    elemento_65.setAttribute('style', 'text-align: center;');
    elemento_64.appendChild(elemento_65);

    var elemento_66 = document.createElement('STRONG');
    elemento_65.appendChild(elemento_66);

    var elemento_67 = document.createTextNode((new String("CICLOS FORMATIVOS")));
    elemento_66.appendChild(elemento_67);

    var elemento_68 = document.createElement('P');
    elemento_68.setAttribute('style', 'text-align: center;');
    elemento_64.appendChild(elemento_68);

    var elemento_69 = document.createElement('A');
    elemento_69.setAttribute('href', '/index.php/component/content/article?id=56');
    elemento_69.setAttribute('target', '_blank');
    elemento_69.setAttribute('rel', 'noopener noreferrer');
    elemento_68.appendChild(elemento_69);

    var elemento_70 = document.createTextNode((new String("Descargar la guía de estudios de Formación Profesional")));
    elemento_69.appendChild(elemento_70);

    var elemento_71 = document.createElement('P');
    elemento_71.setAttribute('style', 'text-align: center;');
    elemento_64.appendChild(elemento_71);

    var elemento_72 = document.createElement('A');
    elemento_72.setAttribute('href', '/index.php/component/content/article?id=56');
    elemento_72.setAttribute('target', '_blank');
    elemento_72.setAttribute('rel', 'noopener noreferrer');
    elemento_71.appendChild(elemento_72);

    var elemento_73 = document.createTextNode((new String("Descargar la guía de estudios de Formación Profesional\\n                            Modalidad a Distancia")));
    elemento_72.appendChild(elemento_73);

    var elemento_74 = document.createElement('TD');
    elemento_74.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); width: 325px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#181a1b;');
    elemento_74.setAttribute('data-darkreader-inline-border-top', '');
    elemento_74.setAttribute('data-darkreader-inline-border-right', '');
    elemento_74.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_74.setAttribute('data-darkreader-inline-border-left', '');
    elemento_74.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_63.appendChild(elemento_74);

    var elemento_75 = document.createElement('P');
    elemento_75.setAttribute('style', 'text-align: center;');
    elemento_74.appendChild(elemento_75);

    var elemento_76 = document.createElement('A');
    elemento_76.setAttribute('href', '/index.php/component/content/article?id=60');
    elemento_76.setAttribute('target', '_blank');
    elemento_76.setAttribute('rel', 'noopener noreferrer');
    elemento_75.appendChild(elemento_76);

    var elemento_77 = document.createTextNode((new String("Conócelos pinchando")));
    elemento_76.appendChild(elemento_77);

    var elemento_78 = document.createElement('STRONG');
    elemento_76.appendChild(elemento_78);

    var elemento_79 = document.createElement('P');
    elemento_79.setAttribute('style', 'text-align: center;');
    elemento_74.appendChild(elemento_79);

    var elemento_80 = document.createElement('A');
    elemento_80.setAttribute('href', '/index.php/component/content/article?id=60');
    elemento_80.setAttribute('target', '_blank');
    elemento_80.setAttribute('rel', 'noopener noreferrer');
    elemento_79.appendChild(elemento_80);

    var elemento_81 = document.createElement('TR');
    elemento_81.setAttribute('style', 'border-color: rgb(0, 0, 0); --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273;');
    elemento_81.setAttribute('data-darkreader-inline-border-top', '');
    elemento_81.setAttribute('data-darkreader-inline-border-right', '');
    elemento_81.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_81.setAttribute('data-darkreader-inline-border-left', '');
    elemento_3.appendChild(elemento_81);

    var elemento_82 = document.createElement('TD');
    elemento_82.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(212, 203, 203); width: 305.5px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#333739;');
    elemento_82.setAttribute('data-darkreader-inline-border-top', '');
    elemento_82.setAttribute('data-darkreader-inline-border-right', '');
    elemento_82.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_82.setAttribute('data-darkreader-inline-border-left', '');
    elemento_82.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_81.appendChild(elemento_82);

    var elemento_83 = document.createElement('P');
    elemento_83.setAttribute('style', 'text-align: center;');
    elemento_82.appendChild(elemento_83);

    var elemento_84 = document.createElement('STRONG');
    elemento_83.appendChild(elemento_84);

    var elemento_85 = document.createTextNode((new String("FORMACIÓN PROFESIONAL BÁSICA")));
    elemento_84.appendChild(elemento_85);

    var elemento_86 = document.createElement('P');
    elemento_86.setAttribute('style', 'text-align: center;');
    elemento_82.appendChild(elemento_86);

    var elemento_87 = document.createElement('A');
    elemento_87.setAttribute('href', '/images/oferta_educativa/Guia_de_Estudios_FP_BASICA_20-21.pdf');
    elemento_87.setAttribute('target', '_blank');
    elemento_87.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_86.appendChild(elemento_87);

    var elemento_88 = document.createTextNode((new String("Descargar la guía de estudios de F.P. Básica")));
    elemento_87.appendChild(elemento_88);

    var elemento_89 = document.createElement('TD');
    elemento_89.setAttribute('style', 'border-color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); width: 325px; --darkreader-inline-border-top:#8c8273; --darkreader-inline-border-right:#8c8273; --darkreader-inline-border-bottom:#8c8273; --darkreader-inline-border-left:#8c8273; --darkreader-inline-bgcolor:#181a1b;');
    elemento_89.setAttribute('data-darkreader-inline-border-top', '');
    elemento_89.setAttribute('data-darkreader-inline-border-right', '');
    elemento_89.setAttribute('data-darkreader-inline-border-bottom', '');
    elemento_89.setAttribute('data-darkreader-inline-border-left', '');
    elemento_89.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_81.appendChild(elemento_89);

    var elemento_90 = document.createElement('TABLE');
    elemento_90.setAttribute('style', 'width: 325px; height: 244px;');
    elemento_90.setAttribute('border', '1');
    elemento_89.appendChild(elemento_90);

    var elemento_91 = document.createElement('TBODY');
    elemento_90.appendChild(elemento_91);

    var elemento_92 = document.createElement('TR');
    elemento_91.appendChild(elemento_92);

    var elemento_93 = document.createElement('TD');
    elemento_93.setAttribute('style', 'width: 225.267px; text-align: center;');
    elemento_92.appendChild(elemento_93);

    var elemento_94 = document.createElement('P');
    elemento_93.appendChild(elemento_94);

    var elemento_95 = document.createElement('STRONG');
    elemento_94.appendChild(elemento_95);

    var elemento_96 = document.createElement('P');
    elemento_93.appendChild(elemento_96);

    var elemento_97 = document.createElement('A');
    elemento_97.setAttribute('href', 'http://www.educa.jccm.es/es/fpclm/ciclos-formativos/titulos-profesionales-fp-basica/profesional-basico-servicios-administrativos');
    elemento_96.appendChild(elemento_97);

    var elemento_98 = document.createTextNode((new String("(Ver\\n                                            información)")));
    elemento_97.appendChild(elemento_98);

    var elemento_99 = document.createElement('TD');
    elemento_99.setAttribute('style', 'width: 85.2333px;');
    elemento_92.appendChild(elemento_99);

    var elemento_100 = document.createElement('P');
    elemento_99.appendChild(elemento_100);

    var elemento_101 = document.createElement('STRONG');
    elemento_100.appendChild(elemento_101);

    var elemento_102 = document.createTextNode((new String("PRIMERO")));
    elemento_101.appendChild(elemento_102);

    var elemento_103 = document.createElement('P');
    elemento_99.appendChild(elemento_103);

    var elemento_104 = document.createElement('STRONG');
    elemento_103.appendChild(elemento_104);

    var elemento_105 = document.createTextNode((new String("SEGUNDO")));
    elemento_104.appendChild(elemento_105);

    var elemento_106 = document.createElement('TR');
    elemento_91.appendChild(elemento_106);

    var elemento_107 = document.createElement('TD');
    elemento_107.setAttribute('style', 'width: 225.267px; text-align: center;');
    elemento_106.appendChild(elemento_107);

    var elemento_108 = document.createElement('P');
    elemento_107.appendChild(elemento_108);

    var elemento_109 = document.createElement('STRONG');
    elemento_108.appendChild(elemento_109);

    var elemento_110 = document.createElement('P');
    elemento_107.appendChild(elemento_110);

    var elemento_111 = document.createElement('A');
    elemento_111.setAttribute('href', 'http://www.educa.jccm.es/es/fpclm/ciclos-formativos/titulos-profesionales-fp-basica/profesional-basico-informatica-oficina');
    elemento_110.appendChild(elemento_111);

    var elemento_112 = document.createTextNode((new String("(Ver\\n                                            información)")));
    elemento_111.appendChild(elemento_112);

    var elemento_113 = document.createElement('TD');
    elemento_113.setAttribute('style', 'width: 85.2333px;');
    elemento_106.appendChild(elemento_113);

    var elemento_114 = document.createElement('P');
    elemento_113.appendChild(elemento_114);

    var elemento_115 = document.createElement('STRONG');
    elemento_114.appendChild(elemento_115);

    var elemento_116 = document.createTextNode((new String("PRIMERO")));
    elemento_115.appendChild(elemento_116);

    var elemento_117 = document.createElement('P');
    elemento_113.appendChild(elemento_117);

    var elemento_118 = document.createElement('STRONG');
    elemento_117.appendChild(elemento_118);

    var elemento_119 = document.createTextNode((new String("SEGUNDO")));
    elemento_118.appendChild(elemento_119);

    var elemento_120 = document.createElement('TR');
    elemento_91.appendChild(elemento_120);

    var elemento_121 = document.createElement('TD');
    elemento_121.setAttribute('style', 'width: 225.267px; text-align: center;');
    elemento_120.appendChild(elemento_121);

    var elemento_122 = document.createElement('STRONG');
    elemento_121.appendChild(elemento_122);

    var elemento_123 = document.createTextNode((new String("Programa de Inclusión Laboral\\n                                        de 2 años para alumnos con necesidades educativas especiales.")));
    elemento_122.appendChild(elemento_123);

    var elemento_124 = document.createElement('TD');
    elemento_124.setAttribute('style', 'width: 85.2333px;');
    elemento_120.appendChild(elemento_124);

    var elemento_125 = document.createElement('P');
    elemento_124.appendChild(elemento_125);

    var elemento_126 = document.createElement('STRONG');
    elemento_125.appendChild(elemento_126);

    var elemento_127 = document.createTextNode((new String("PRIMERO")));
    elemento_126.appendChild(elemento_127);

    var elemento_128 = document.createElement('P');
    elemento_124.appendChild(elemento_128);

    var elemento_129 = document.createElement('STRONG');
    elemento_128.appendChild(elemento_129);

    var elemento_130 = document.createTextNode((new String("SEGUNDO")));
    elemento_129.appendChild(elemento_130);

    var elemento_131 = document.createElement('P');
    elemento_1.appendChild(elemento_131);

    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `table {
    background: grey;
    margin-top: 5%;
    margin-left: 4%;
    /*margin: 0 auto;*/
    border: #c12626 4px solid;
    border-collapse: collapse;
    width: 93%;
    height: 75%;
    text-align: center;
    padding-left: 200px;
  }
  
  select {
    background-color: grey;
    font-size: 143%;
    width: 78%;
    height: 78%;
    font-weight: bold;
    text-size-adjust: 0%;
  }
  
  td {
    border: #c12626 2px solid;
    border-collapse: collapse;
  }
  
  th {
    color: #103e10;
    background-color: #de8989;
  }`;

    contenido.appendChild(css);
    //var contenido = document.getElementById('contenido');
    contenido.appendChild(elemento_1);
}
//Carga la lista de instalaciones
export function instalaciones() {
    var elemento_1 = document.createElement('UL');
    elemento_1.setAttribute('class', 'list-group');

    var elemento_2 = document.createElement('LI');
    elemento_2.setAttribute('class', 'list-group-item active h6 text-center');
    elemento_1.appendChild(elemento_2);

    var elemento_3 = document.createTextNode((new String("INSTALACIONES DEL CENTRO")));
    elemento_2.appendChild(elemento_3);

    var elemento_4 = document.createElement('LI');
    elemento_4.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_4);

    var elemento_5 = document.createTextNode((new String("30 Aulas Materia")));
    elemento_4.appendChild(elemento_5);

    var elemento_6 = document.createElement('LI');
    elemento_6.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_6);

    var elemento_7 = document.createElement('LI');
    elemento_7.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_7);

    var elemento_8 = document.createTextNode((new String("Laboratorios (Física, Química, Biología, Ciencias\\n                    Naturales)")));
    elemento_7.appendChild(elemento_8);

    var elemento_9 = document.createElement('LI');
    elemento_9.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_9);

    var elemento_10 = document.createTextNode((new String("Aulas Específicas de Ciclos Formativos y Garantía\\n                    Social")));
    elemento_9.appendChild(elemento_10);

    var elemento_11 = document.createElement('LI');
    elemento_11.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_11);

    var elemento_12 = document.createTextNode((new String("32 Aulas con dotación de Cañón de Vídeo, Ordenador y\\n                    pantalla conectadas en\\n                    Red")));
    elemento_11.appendChild(elemento_12);

    var elemento_13 = document.createElement('LI');
    elemento_13.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_13);

    var elemento_14 = document.createElement('LI');
    elemento_14.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_14);

    var elemento_15 = document.createTextNode((new String("2 Aulas de Usos Múltiples con pizarra Interactiva")));
    elemento_14.appendChild(elemento_15);

    var elemento_16 = document.createElement('LI');
    elemento_16.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_16);

    var elemento_17 = document.createTextNode((new String("Gimnasio, Pistas Polideportivas y uso del Pabellón San\\n                    Pedro Mortero")));
    elemento_16.appendChild(elemento_17);

    var elemento_18 = document.createElement('LI');
    elemento_18.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_18);

    var elemento_19 = document.createTextNode((new String("Salón de Actos")));
    elemento_18.appendChild(elemento_19);

    var elemento_20 = document.createElement('LI');
    elemento_20.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_20);

    var elemento_21 = document.createTextNode((new String("Biblioteca")));
    elemento_20.appendChild(elemento_21);

    var elemento_22 = document.createElement('LI');
    elemento_22.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_22);

    var elemento_23 = document.createTextNode((new String("2 Salas para entrevistas con Familias")));
    elemento_22.appendChild(elemento_23);

    var elemento_24 = document.createElement('LI');
    elemento_24.setAttribute('class', 'list-group-item list-group-item-dark');
    elemento_1.appendChild(elemento_24);

    var elemento_25 = document.createTextNode((new String("Despacho para la Asociación de Madres y Padres")));
    elemento_24.appendChild(elemento_25);
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `table {
    background: grey;
    margin-top: 5%;
    margin-left: 4%;
    /*margin: 0 auto;*/
    border: #c12626 4px solid;
    border-collapse: collapse;
    width: 93%;
    height: 75%;
    text-align: center;
    padding-left: 200px;
  }
  
  select {
    background-color: grey;
    font-size: 143%;
    width: 78%;
    height: 78%;
    font-weight: bold;
    text-size-adjust: 0%;
  }
  
  td {
    border: #c12626 2px solid;
    border-collapse: collapse;
  }
  
  th {
    color: #103e10;
    background-color: #de8989;
  }`;
    contenido.appendChild(css);
    //var contenido = document.getElementById('contenido');
    contenido.appendChild(elemento_1);

}
//Carga la lista de recursos
export function recursosCentro() {
    var elemento_1 = document.createElement('ARTICLE');
    elemento_1.setAttribute('class', ' bd-article-2 border border-success border-4 rounded-4');
    elemento_1.setAttribute('style', 'position: relative; background: rgba(0, 0, 0, 0.45);');

    var elemento_2 = document.createElement('DIV');
    elemento_2.setAttribute('class', ' bd-layoutcontainer-13 bd-columns bd-no-margins');
    elemento_1.appendChild(elemento_2);

    var elemento_3 = document.createElement('DIV');
    elemento_3.setAttribute('class', 'bd-container-inner');
    elemento_2.appendChild(elemento_3);

    var elemento_4 = document.createElement('DIV');
    elemento_4.setAttribute('class', 'container-fluid');
    elemento_3.appendChild(elemento_4);

    var elemento_5 = document.createElement('DIV');
    elemento_5.setAttribute('class', 'row ');
    elemento_4.appendChild(elemento_5);

    var elemento_6 = document.createElement('DIV');
    elemento_6.setAttribute('class', ' bd-columnwrapper-37 col-lg-12 col-md-11 col-sm-10');
    elemento_5.appendChild(elemento_6);

    var elemento_7 = document.createElement('DIV');
    elemento_7.setAttribute('class', 'bd-layoutcolumn-37 bd-column');
    elemento_6.appendChild(elemento_7);

    var elemento_8 = document.createElement('DIV');
    elemento_8.setAttribute('class', 'bd-vertical-align-wrapper');
    elemento_7.appendChild(elemento_8);

    var elemento_9 = document.createElement('H2');
    elemento_9.setAttribute('class', 'text-center text-dark bg-primary bd-postheader-8');
    elemento_9.setAttribute('itemprop', 'name');
    elemento_8.appendChild(elemento_9);

    var elemento_10 = document.createTextNode((new String("Nuestros Ciclos")));
    elemento_9.appendChild(elemento_10);

    var elemento_11 = document.createElement('DIV');
    elemento_11.setAttribute('class', ' bd-postcontent-2 bd-tagstyles bd-custom-blockquotes bd-contentlayout-offset');
    elemento_11.setAttribute('itemprop', 'articleBody');
    elemento_1.appendChild(elemento_11);

    var elemento_12 = document.createElement('TABLE');
    elemento_11.appendChild(elemento_12);

    var elemento_13 = document.createElement('TBODY');
    elemento_12.appendChild(elemento_13);

    var elemento_14 = document.createElement('TR');
    elemento_13.appendChild(elemento_14);

    var elemento_15 = document.createElement('TD');
    elemento_15.setAttribute('style', 'background-color: rgb(189, 185, 185); --darkreader-inline-bgcolor:#3e4446;');
    elemento_15.setAttribute('colspan', '3');
    elemento_15.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_14.appendChild(elemento_15);

    var elemento_16 = document.createElement('P');
    elemento_15.appendChild(elemento_16);

    var elemento_17 = document.createElement('STRONG');
    elemento_16.appendChild(elemento_17);

    var elemento_18 = document.createTextNode((new String("Nuestros ciclos")));
    elemento_17.appendChild(elemento_18);

    var elemento_19 = document.createElement('TR');
    elemento_13.appendChild(elemento_19);

    var elemento_20 = document.createElement('TD');
    elemento_20.setAttribute('colspan', '3');
    elemento_19.appendChild(elemento_20);

    var elemento_21 = document.createElement('P');
    elemento_20.appendChild(elemento_21);

    var elemento_22 = document.createElement('STRONG');
    elemento_21.appendChild(elemento_22);

    var elemento_23 = document.createElement('P');
    elemento_20.appendChild(elemento_23);

    var elemento_24 = document.createTextNode((new String("Desde el I.E.S. Leonardo da Vinci trabajamos en la formación de calidad de\\n                                        nuestros alumnos y en la importancia de la Formación Profesional como pilar\\n                                        económico y de desarrollo de nuestro país ¿Por qué?")));
    elemento_23.appendChild(elemento_24);

    var elemento_25 = document.createElement('P');
    elemento_20.appendChild(elemento_25);

    var elemento_26 = document.createElement('EM');
    elemento_25.appendChild(elemento_26);

    var elemento_27 = document.createTextNode((new String("Porque el 65% de los puestos de trabajo de todas las\\n                                            empresas españolas requieren un titulado en Formación Profesional.")));
    elemento_26.appendChild(elemento_27);

    var elemento_28 = document.createElement('P');
    elemento_20.appendChild(elemento_28);

    var elemento_29 = document.createElement('P');
    elemento_20.appendChild(elemento_29);

    var elemento_30 = document.createElement('EM');
    elemento_29.appendChild(elemento_30);

    var elemento_31 = document.createTextNode((new String("Porque los mandos intermedios y técnicos cualificados son\\n                                            la clave de la competitividad de nuestras empresas.")));
    elemento_30.appendChild(elemento_31);

    var elemento_32 = document.createElement('P');
    elemento_20.appendChild(elemento_32);

    var elemento_33 = document.createElement('P');
    elemento_20.appendChild(elemento_33);

    var elemento_34 = document.createElement('EM');
    elemento_33.appendChild(elemento_34);

    var elemento_35 = document.createTextNode((new String("Porque desde los centros de Formación Profesional debemos\\n                                            trabajar en la creación de valor en proyectos conjuntos con las\\n                                            empresas.")));
    elemento_34.appendChild(elemento_35);

    var elemento_36 = document.createElement('TR');
    elemento_13.appendChild(elemento_36);

    var elemento_37 = document.createElement('TD');
    elemento_37.setAttribute('style', 'background-color: rgb(214, 208, 208); --darkreader-inline-bgcolor:#313537;');
    elemento_37.setAttribute('colspan', '3');
    elemento_37.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_36.appendChild(elemento_37);

    var elemento_38 = document.createElement('P');
    elemento_37.appendChild(elemento_38);

    var elemento_39 = document.createElement('STRONG');
    elemento_38.appendChild(elemento_39);

    var elemento_40 = document.createTextNode((new String("GRADO SUPERIOR")));
    elemento_39.appendChild(elemento_40);

    var elemento_41 = document.createElement('TR');
    elemento_13.appendChild(elemento_41);

    var elemento_42 = document.createElement('TD');
    elemento_42.setAttribute('width', '250');
    elemento_41.appendChild(elemento_42);

    var elemento_43 = document.createElement('A');
    elemento_43.setAttribute('href', '/documentos/fichas_ciclos/Ficha_DAM.pdf');
    elemento_43.setAttribute('target', '_blank');
    elemento_43.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_42.appendChild(elemento_43);

    var elemento_44 = document.createElement('IMG');
    elemento_44.setAttribute('src', 'IMG/DAM2.jpg');
    elemento_44.setAttribute('alt', '');
    elemento_43.appendChild(elemento_44);

    var elemento_45 = document.createElement('TD');
    elemento_45.setAttribute('width', '250');
    elemento_41.appendChild(elemento_45);

    var elemento_46 = document.createElement('A');
    elemento_46.setAttribute('href', '/documentos/fichas_ciclos/Ficha_DAW.pdf');
    elemento_46.setAttribute('target', '_blank');
    elemento_46.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_45.appendChild(elemento_46);

    var elemento_47 = document.createElement('IMG');
    elemento_47.setAttribute('src', 'IMG/DAW2.jpg');
    elemento_47.setAttribute('alt', '');
    elemento_46.appendChild(elemento_47);

    var elemento_48 = document.createElement('TD');
    elemento_48.setAttribute('width', '250');
    elemento_41.appendChild(elemento_48);

    var elemento_49 = document.createElement('A');
    elemento_49.setAttribute('href', '/documentos/fichas_ciclos/Ficha_ASIR.pdf');
    elemento_49.setAttribute('target', '_blank');
    elemento_49.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_48.appendChild(elemento_49);

    var elemento_50 = document.createElement('IMG');
    elemento_50.setAttribute('src', 'IMG/ASIR2.jpg');
    elemento_50.setAttribute('alt', '');
    elemento_49.appendChild(elemento_50);

    var elemento_51 = document.createElement('TR');
    elemento_13.appendChild(elemento_51);

    var elemento_52 = document.createElement('TD');
    elemento_52.setAttribute('colspan', '2');
    elemento_51.appendChild(elemento_52);

    var elemento_53 = document.createElement('A');
    elemento_53.setAttribute('href', '/images/oferta_educativa/Ficha_AF.pdf');
    elemento_53.setAttribute('target', '_blank');
    elemento_53.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_52.appendChild(elemento_53);

    var elemento_54 = document.createElement('IMG');
    elemento_54.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto;');
    elemento_54.setAttribute('src', 'IMG//AF2.jpg');
    elemento_54.setAttribute('alt', '');
    elemento_54.setAttribute('width', '254');
    elemento_54.setAttribute('height', '205');
    elemento_53.appendChild(elemento_54);

    var elemento_55 = document.createElement('TD');
    elemento_51.appendChild(elemento_55);

    var elemento_56 = document.createElement('P');
    elemento_55.appendChild(elemento_56);

    var elemento_57 = document.createElement('A');
    elemento_57.setAttribute('href', '/images/oferta_educativa/FichaAD.pdf');
    elemento_57.setAttribute('target', '_blank');
    elemento_57.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_56.appendChild(elemento_57);

    var elemento_58 = document.createElement('STRONG');
    elemento_57.appendChild(elemento_58);

    var elemento_59 = document.createElement('IMG');
    elemento_59.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto;');
    elemento_59.setAttribute('alt', '');
    elemento_59.setAttribute('width', '202');
    elemento_59.setAttribute('height', '197');
    elemento_59.setAttribute('e4wtgw03y', '');
    elemento_58.appendChild(elemento_59);

    var elemento_60 = document.createElement('P');
    elemento_60.setAttribute('style', 'text-align: center;');
    elemento_55.appendChild(elemento_60);

    var elemento_61 = document.createElement('STRONG');
    elemento_60.appendChild(elemento_61);

    var elemento_62 = document.createElement('TR');
    elemento_13.appendChild(elemento_62);

    var elemento_63 = document.createElement('TD');
    elemento_63.setAttribute('style', 'background-color: rgb(214, 208, 208); --darkreader-inline-bgcolor:#313537;');
    elemento_63.setAttribute('colspan', '3');
    elemento_63.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_62.appendChild(elemento_63);

    var elemento_64 = document.createElement('P');
    elemento_63.appendChild(elemento_64);

    var elemento_65 = document.createElement('STRONG');
    elemento_64.appendChild(elemento_65);

    var elemento_66 = document.createTextNode((new String("GRADO MEDIO")));
    elemento_65.appendChild(elemento_66);

    var elemento_67 = document.createElement('TR');
    elemento_13.appendChild(elemento_67);

    var elemento_68 = document.createElement('TD');
    elemento_68.setAttribute('colspan', '2');
    elemento_67.appendChild(elemento_68);

    var elemento_69 = document.createElement('A');
    elemento_69.setAttribute('href', '/documentos/fichas_ciclos/Ficha_SMR.pdf');
    elemento_69.setAttribute('target', '_blank');
    elemento_69.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_68.appendChild(elemento_69);

    var elemento_70 = document.createElement('IMG');
    elemento_70.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto;');
    elemento_70.setAttribute('src', 'IMG/SMR2.jpg');
    elemento_70.setAttribute('alt', '');
    elemento_69.appendChild(elemento_70);

    var elemento_71 = document.createElement('TD');
    elemento_67.appendChild(elemento_71);

    var elemento_72 = document.createElement('A');
    elemento_72.setAttribute('href', '/documentos/fichas_ciclos/Ficha_GA.pdf');
    elemento_72.setAttribute('target', '_blank');
    elemento_72.setAttribute('rel', 'alternate noopener noreferrer');
    elemento_71.appendChild(elemento_72);

    var elemento_73 = document.createElement('IMG');
    elemento_73.setAttribute('style', 'display: block; margin-left: auto; margin-right: auto;');
    elemento_73.setAttribute('src', 'IMG/GA2.jpg');
    elemento_73.setAttribute('alt', '');
    elemento_72.appendChild(elemento_73);

    var elemento_74 = document.createElement('P');
    elemento_11.appendChild(elemento_74);

    var elemento_75 = document.createElement('TABLE');
    elemento_75.setAttribute('width', '100%');
    elemento_11.appendChild(elemento_75);

    var elemento_76 = document.createElement('TBODY');
    elemento_75.appendChild(elemento_76);

    var elemento_77 = document.createElement('TR');
    elemento_76.appendChild(elemento_77);

    var elemento_78 = document.createElement('TD');
    elemento_78.setAttribute('style', 'background-color: rgb(189, 185, 185); --darkreader-inline-bgcolor:#3e4446;');
    elemento_78.setAttribute('data-darkreader-inline-bgcolor', '');
    elemento_77.appendChild(elemento_78);

    var elemento_79 = document.createElement('P');
    elemento_78.appendChild(elemento_79);

    var elemento_80 = document.createElement('STRONG');
    elemento_79.appendChild(elemento_80);

    var elemento_81 = document.createTextNode((new String("Nuestros ciclos en modalidad E-Learning y en modalidad\\n                                            Presencial  ")));
    elemento_80.appendChild(elemento_81);

    var elemento_82 = document.createElement('BR');
    elemento_80.appendChild(elemento_82);

    var elemento_83 = document.createElement('BR');
    elemento_80.appendChild(elemento_83);

    var elemento_84 = document.createElement('TR');
    elemento_76.appendChild(elemento_84);

    var elemento_85 = document.createElement('TD');
    elemento_84.appendChild(elemento_85);

    var elemento_86 = document.createElement('P');
    elemento_85.appendChild(elemento_86);

    var elemento_87 = document.createTextNode((new String("Tres de los Ciclos comentados anteriormente se imparten en el centro en\\n                                        ")));
    elemento_86.appendChild(elemento_87);

    var elemento_88 = document.createElement('STRONG');
    elemento_86.appendChild(elemento_88);

    var elemento_89 = document.createTextNode((new String(" En la siguiente tabla se muestra para\\n                                        cada ciclo en qué modalidad se imparte, E-learning o presencial, y para ésta\\n                                        última en qué turno (Diurno o Vespertino).\\n                                    ")));
    elemento_86.appendChild(elemento_89);

    var elemento_90 = document.createElement('P');
    elemento_85.appendChild(elemento_90);

    var elemento_91 = document.createElement('TABLE');
    elemento_91.setAttribute('style', 'height: 427px; margin-left: auto; margin-right: auto; width: 698px;');
    elemento_85.appendChild(elemento_91);

    var elemento_92 = document.createElement('TBODY');
    elemento_91.appendChild(elemento_92);

    var elemento_93 = document.createElement('TR');
    elemento_92.appendChild(elemento_93);

    var elemento_94 = document.createElement('TD');
    elemento_94.setAttribute('style', 'width: 439px;');
    elemento_93.appendChild(elemento_94);

    var elemento_95 = document.createElement('P');
    elemento_94.appendChild(elemento_95);

    var elemento_96 = document.createElement('STRONG');
    elemento_95.appendChild(elemento_96);

    var elemento_97 = document.createTextNode((new String("Ciclo Formativo")));
    elemento_96.appendChild(elemento_97);

    var elemento_98 = document.createElement('TD');
    elemento_98.setAttribute('style', 'width: 100px;');
    elemento_93.appendChild(elemento_98);

    var elemento_99 = document.createElement('P');
    elemento_98.appendChild(elemento_99);

    var elemento_100 = document.createElement('STRONG');
    elemento_99.appendChild(elemento_100);

    var elemento_101 = document.createTextNode((new String("Diurno")));
    elemento_100.appendChild(elemento_101);

    var elemento_102 = document.createElement('TD');
    elemento_102.setAttribute('style', 'width: 39px;');
    elemento_93.appendChild(elemento_102);

    var elemento_103 = document.createElement('P');
    elemento_102.appendChild(elemento_103);

    var elemento_104 = document.createElement('STRONG');
    elemento_103.appendChild(elemento_104);

    var elemento_105 = document.createTextNode((new String("Vespertino")));
    elemento_104.appendChild(elemento_105);

    var elemento_106 = document.createElement('TD');
    elemento_106.setAttribute('style', 'width: 98px;');
    elemento_93.appendChild(elemento_106);

    var elemento_107 = document.createElement('P');
    elemento_106.appendChild(elemento_107);

    var elemento_108 = document.createElement('STRONG');
    elemento_107.appendChild(elemento_108);

    var elemento_109 = document.createTextNode((new String("E-Learning")));
    elemento_108.appendChild(elemento_109);

    var elemento_110 = document.createElement('TR');
    elemento_92.appendChild(elemento_110);

    var elemento_111 = document.createElement('TD');
    elemento_111.setAttribute('style', 'width: 439px;');
    elemento_110.appendChild(elemento_111);

    var elemento_112 = document.createElement('P');
    elemento_111.appendChild(elemento_112);

    var elemento_113 = document.createElement('STRONG');
    elemento_112.appendChild(elemento_113);

    var elemento_114 = document.createTextNode((new String("C.F.G.M. Sistemas Microinformáticos y redes")));
    elemento_113.appendChild(elemento_114);

    var elemento_115 = document.createElement('TD');
    elemento_115.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_110.appendChild(elemento_115);

    var elemento_116 = document.createElement('P');
    elemento_115.appendChild(elemento_116);

    var elemento_117 = document.createElement('STRONG');
    elemento_116.appendChild(elemento_117);

    var elemento_118 = document.createTextNode((new String("X")));
    elemento_117.appendChild(elemento_118);

    var elemento_119 = document.createElement('TD');
    elemento_119.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_110.appendChild(elemento_119);

    var elemento_120 = document.createElement('P');
    elemento_119.appendChild(elemento_120);

    var elemento_121 = document.createElement('STRONG');
    elemento_120.appendChild(elemento_121);

    var elemento_122 = document.createTextNode((new String("X")));
    elemento_121.appendChild(elemento_122);

    var elemento_123 = document.createElement('TD');
    elemento_123.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_110.appendChild(elemento_123);

    var elemento_124 = document.createElement('P');
    elemento_123.appendChild(elemento_124);

    var elemento_125 = document.createElement('STRONG');
    elemento_124.appendChild(elemento_125);

    var elemento_126 = document.createTextNode((new String("X")));
    elemento_125.appendChild(elemento_126);

    var elemento_127 = document.createElement('TR');
    elemento_92.appendChild(elemento_127);

    var elemento_128 = document.createElement('TD');
    elemento_128.setAttribute('style', 'width: 439px;');
    elemento_127.appendChild(elemento_128);

    var elemento_129 = document.createElement('P');
    elemento_128.appendChild(elemento_129);

    var elemento_130 = document.createElement('STRONG');
    elemento_129.appendChild(elemento_130);

    var elemento_131 = document.createTextNode((new String("C.F.G.M. Gestión Administrativa")));
    elemento_130.appendChild(elemento_131);

    var elemento_132 = document.createElement('TD');
    elemento_132.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_127.appendChild(elemento_132);

    var elemento_133 = document.createElement('P');
    elemento_132.appendChild(elemento_133);

    var elemento_134 = document.createElement('STRONG');
    elemento_133.appendChild(elemento_134);

    var elemento_135 = document.createTextNode((new String("X")));
    elemento_134.appendChild(elemento_135);

    var elemento_136 = document.createElement('TD');
    elemento_136.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_127.appendChild(elemento_136);

    var elemento_137 = document.createElement('P');
    elemento_136.appendChild(elemento_137);

    var elemento_138 = document.createElement('STRONG');
    elemento_137.appendChild(elemento_138);

    var elemento_139 = document.createTextNode((new String("X")));
    elemento_138.appendChild(elemento_139);

    var elemento_140 = document.createElement('TD');
    elemento_140.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_127.appendChild(elemento_140);

    var elemento_141 = document.createElement('P');
    elemento_140.appendChild(elemento_141);

    var elemento_142 = document.createElement('TR');
    elemento_92.appendChild(elemento_142);

    var elemento_143 = document.createElement('TD');
    elemento_143.setAttribute('style', 'width: 439px;');
    elemento_142.appendChild(elemento_143);

    var elemento_144 = document.createElement('P');
    elemento_143.appendChild(elemento_144);

    var elemento_145 = document.createElement('STRONG');
    elemento_144.appendChild(elemento_145);

    var elemento_146 = document.createTextNode((new String("C.F.G.S. Administración y Finanzas")));
    elemento_145.appendChild(elemento_146);

    var elemento_147 = document.createElement('TD');
    elemento_147.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_142.appendChild(elemento_147);

    var elemento_148 = document.createElement('P');
    elemento_147.appendChild(elemento_148);

    var elemento_149 = document.createElement('STRONG');
    elemento_148.appendChild(elemento_149);

    var elemento_150 = document.createTextNode((new String("X")));
    elemento_149.appendChild(elemento_150);

    var elemento_151 = document.createElement('TD');
    elemento_151.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_142.appendChild(elemento_151);

    var elemento_152 = document.createElement('P');
    elemento_151.appendChild(elemento_152);

    var elemento_153 = document.createElement('STRONG');
    elemento_152.appendChild(elemento_153);

    var elemento_154 = document.createTextNode((new String("X")));
    elemento_153.appendChild(elemento_154);

    var elemento_155 = document.createElement('TD');
    elemento_155.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_142.appendChild(elemento_155);

    var elemento_156 = document.createElement('P');
    elemento_155.appendChild(elemento_156);

    var elemento_157 = document.createElement('TR');
    elemento_92.appendChild(elemento_157);

    var elemento_158 = document.createElement('TD');
    elemento_158.setAttribute('style', 'width: 439px;');
    elemento_157.appendChild(elemento_158);

    var elemento_159 = document.createElement('P');
    elemento_158.appendChild(elemento_159);

    var elemento_160 = document.createElement('STRONG');
    elemento_159.appendChild(elemento_160);

    var elemento_161 = document.createTextNode((new String("C.F.G.S. Asistencia a la Dirección")));
    elemento_160.appendChild(elemento_161);

    var elemento_162 = document.createElement('TD');
    elemento_162.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_157.appendChild(elemento_162);

    var elemento_163 = document.createElement('P');
    elemento_162.appendChild(elemento_163);

    var elemento_164 = document.createElement('TD');
    elemento_164.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_157.appendChild(elemento_164);

    var elemento_165 = document.createElement('P');
    elemento_164.appendChild(elemento_165);

    var elemento_166 = document.createElement('STRONG');
    elemento_165.appendChild(elemento_166);

    var elemento_167 = document.createTextNode((new String("X")));
    elemento_166.appendChild(elemento_167);

    var elemento_168 = document.createElement('TD');
    elemento_168.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_157.appendChild(elemento_168);

    var elemento_169 = document.createElement('P');
    elemento_168.appendChild(elemento_169);

    var elemento_170 = document.createElement('STRONG');
    elemento_169.appendChild(elemento_170);

    var elemento_171 = document.createTextNode((new String("X")));
    elemento_170.appendChild(elemento_171);

    var elemento_172 = document.createElement('TR');
    elemento_92.appendChild(elemento_172);

    var elemento_173 = document.createElement('TD');
    elemento_173.setAttribute('style', 'width: 439px;');
    elemento_172.appendChild(elemento_173);

    var elemento_174 = document.createElement('P');
    elemento_173.appendChild(elemento_174);

    var elemento_175 = document.createElement('STRONG');
    elemento_174.appendChild(elemento_175);

    var elemento_176 = document.createTextNode((new String("C.F.G.S. Administración de Sistemas Informáticos en\\n                                                            Red")));
    elemento_175.appendChild(elemento_176);

    var elemento_177 = document.createElement('TD');
    elemento_177.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_172.appendChild(elemento_177);

    var elemento_178 = document.createElement('P');
    elemento_177.appendChild(elemento_178);

    var elemento_179 = document.createElement('STRONG');
    elemento_178.appendChild(elemento_179);

    var elemento_180 = document.createTextNode((new String("X")));
    elemento_179.appendChild(elemento_180);

    var elemento_181 = document.createElement('TD');
    elemento_181.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_172.appendChild(elemento_181);

    var elemento_182 = document.createElement('P');
    elemento_181.appendChild(elemento_182);

    var elemento_183 = document.createElement('TD');
    elemento_183.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_172.appendChild(elemento_183);

    var elemento_184 = document.createElement('P');
    elemento_183.appendChild(elemento_184);

    var elemento_185 = document.createElement('TR');
    elemento_92.appendChild(elemento_185);

    var elemento_186 = document.createElement('TD');
    elemento_186.setAttribute('style', 'width: 439px;');
    elemento_185.appendChild(elemento_186);

    var elemento_187 = document.createElement('P');
    elemento_186.appendChild(elemento_187);

    var elemento_188 = document.createElement('STRONG');
    elemento_187.appendChild(elemento_188);

    var elemento_189 = document.createTextNode((new String("C.F.G.S. Desarrollo de Aplicaciones Web")));
    elemento_188.appendChild(elemento_189);

    var elemento_190 = document.createElement('TD');
    elemento_190.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_185.appendChild(elemento_190);

    var elemento_191 = document.createElement('P');
    elemento_190.appendChild(elemento_191);

    var elemento_192 = document.createElement('STRONG');
    elemento_191.appendChild(elemento_192);

    var elemento_193 = document.createTextNode((new String("X")));
    elemento_192.appendChild(elemento_193);

    var elemento_194 = document.createElement('TD');
    elemento_194.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_185.appendChild(elemento_194);

    var elemento_195 = document.createElement('P');
    elemento_194.appendChild(elemento_195);

    var elemento_196 = document.createElement('TD');
    elemento_196.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_185.appendChild(elemento_196);

    var elemento_197 = document.createElement('P');
    elemento_196.appendChild(elemento_197);

    var elemento_198 = document.createElement('TR');
    elemento_92.appendChild(elemento_198);

    var elemento_199 = document.createElement('TD');
    elemento_199.setAttribute('style', 'width: 439px;');
    elemento_198.appendChild(elemento_199);

    var elemento_200 = document.createElement('P');
    elemento_199.appendChild(elemento_200);

    var elemento_201 = document.createElement('STRONG');
    elemento_200.appendChild(elemento_201);

    var elemento_202 = document.createTextNode((new String("C.F.G.S. Desarrollo de Aplicaciones\\n                                                            Multiplataforma")));
    elemento_201.appendChild(elemento_202);

    var elemento_203 = document.createElement('TD');
    elemento_203.setAttribute('style', 'width: 100px; text-align: center;');
    elemento_198.appendChild(elemento_203);

    var elemento_204 = document.createElement('P');
    elemento_203.appendChild(elemento_204);

    var elemento_205 = document.createElement('STRONG');
    elemento_204.appendChild(elemento_205);

    var elemento_206 = document.createTextNode((new String(" X")));
    elemento_205.appendChild(elemento_206);

    var elemento_207 = document.createElement('TD');
    elemento_207.setAttribute('style', 'width: 39px; text-align: center;');
    elemento_198.appendChild(elemento_207);

    var elemento_208 = document.createElement('P');
    elemento_207.appendChild(elemento_208);

    var elemento_209 = document.createElement('STRONG');
    elemento_208.appendChild(elemento_209);

    var elemento_210 = document.createTextNode((new String("X")));
    elemento_209.appendChild(elemento_210);

    var elemento_211 = document.createElement('TD');
    elemento_211.setAttribute('style', 'width: 98px; text-align: center;');
    elemento_198.appendChild(elemento_211);

    var elemento_212 = document.createElement('P');
    elemento_211.appendChild(elemento_212);

    var elemento_213 = document.createElement('STRONG');
    elemento_212.appendChild(elemento_213);

    var elemento_214 = document.createTextNode((new String("X")));
    elemento_213.appendChild(elemento_214);

    var elemento_215 = document.createElement('P');
    elemento_11.appendChild(elemento_215);

    var elemento_216 = document.createElement('DIV');
    elemento_216.setAttribute('class', ' bd-layoutbox-11 bd-no-margins clearfix');
    elemento_1.appendChild(elemento_216);

    var elemento_217 = document.createElement('DIV');
    elemento_217.setAttribute('class', 'bd-container-inner');
    elemento_216.appendChild(elemento_217);
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `table {
    background: grey;
    margin-top: 5%;
    margin-left: 4%;
    /*margin: 0 auto;*/
    border: #c12626 4px solid;
    border-collapse: collapse;
    width: 93%;
    height: 75%;
    text-align: center;
    padding-left: 200px;
  }
  
  select {
    background-color: grey;
    font-size: 143%;
    width: 78%;
    height: 78%;
    font-weight: bold;
    text-size-adjust: 0%;
  }
  
  td {
    border: #c12626 2px solid;
    border-collapse: collapse;
  }
  
  th {
    color: #103e10;
    background-color: #de8989;
  }`;
    contenido.appendChild(css);
    //var contenido = document.getElementById('contenido');
    contenido.appendChild(elemento_1);
}