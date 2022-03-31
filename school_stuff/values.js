/*
IMPORTANT NOTE:
might need to add a constant value to all x0 and y0 after adjusting the thing
*/

let mlcs = {
    "ala": {
        x0: 0.025,
        y0: 0.04,
        dx: 0.032,
        dy: 0.035,
        fullname: "alanine",
        type: "molecule"
    },
    "plp": {
        x0: 0.07,
        y0: 0.045,
        dx: 0.032,
        dy: 0.035,
        fullname: "pyridoxal-5-phosphate (vitamin b6)",
        type: "cofactor"
    },
    "pyr": {
        x0: 0.12,
        y0: 0.045,
        dx: 0.028,
        dy: 0.032,
        fullname: "pyruvate",
        type: "product"
    },
    "trans": {
        x0: 0.068,
        y0: 0.088,
        dx: 0.04,
        dy: 0.025,
        fullname: "transaminase",
        type: "enzyme"
    },
    "aketo": {
        x0: 0.021,
        y0: 0.1,
        dx: 0.045,
        dy: 0.056,
        fullname: "α-ketoglutarate",
        type: "molecule"
    },
    "glut": {
        x0: 0.11,
        y0: 0.098,
        dx: 0.042,
        dy: 0.056,
        fullname: "glutamate",
        type: "molecule"
    },
    "gluc": {
        x0: 0.3633,
        y0: 0.018,
        dx: 0.038,
        dy: 0.024,
        fullname: "glucose",
        type: "molecule"
    },
    "g6p": {
        x0: 0.348,
        y0: 0.056,
        dx: 0.068,
        dy: 0.024,
        fullname: "glucose-6-phosphate",
        type: "molecule"
    },
    "hatad": {
        x0: 0.302,
        y0: 0.023,
        dx: 0.063,
        dy: 0.042,
        fullname: "hexokinase & atp->adp",
        type: "enzyme"
    },
    "h2opi": {
        x0: 0.422,
        y0: 0.021,
        dx: 0.043,
        dy: 0.042,
        fullname: "h2o->pi",
        type: "cofactor??"
    },
    "g1p": {
        x0: 0.44,
        y0: 0.059,
        dx: 0.073,
        dy: 0.024,
        fullname: "glucose-1-phosphate",
        type: "molecule"
    },
    "utpppi": {
        x0: 0.544,
        y0: 0.064,
        dx: 0.02,
        dy: 0.038,
        fullname: "UTP->PPi",
        type: "cofactor??"
    },
    "gphos": {
        x0: 0.474,
        y0: 0.094,
        dx: 0.043,
        dy: 0.018,
        fullname: "glycogen phosphorylase",
        type: "enzyme"
    },
    "udpgluc": {
        x0: 0.52,
        y0: 0.1,
        dx: 0.043,
        dy: 0.018,
        fullname: "UDP Glucose",
        type: "molecule"
    },
    "growudp": {
        x0: 0.538,
        y0: 0.12,
        dx: 0.056,
        dy: 0.034,
        fullname: "Glycogen Synthase; Adds Glucose to Growing Glycogen and removes UDP",
        type: "reaction"
    },
    "pi": {
        x0: 0.4962825278810409,
        y0: 0.12087912087912088,
        dx: 0.016728624535315983,
        dy: 0.016483516483516494,
        fullname: "Pi",
        type: "molecule"
    },
    "glyc": {
        x0: 0.5074349442379182,
        y0: 0.15567765567765568,
        dx: 0.040892193308550207,
        dy: 0.014652014652014655,
        fullname: "Glycogen",
        type: "molecule"
    },
    "f6p": {
        x0: 0.34683954619124796,
        y0: 0.10063897763578275,
        dx: 0.07131280388978933,
        dy: 0.012779552715654952,
        fullname: "Fructose 6-Phosphate",
        type: "molecule"
    },
    "f16bp": {
        x0: 0.34521880064829824,
        y0: 0.1389776357827476,
        dx: 0.08103727714748782,
        dy: 0.014376996805111814,
        fullname: "Fructose 1,6-Bisphosphate",
        notes: "made from f6p by Phosphofructokinase 1, backwards \
        reaction is D-fructose 1,6-bisphophatase",
        type: "molecule"
    },
    "atpadp2": {
        x0: 0.2965964343598055,
        y0: 0.10223642172523961,
        dx: 0.029173419773095677,
        dy: 0.04792332268370608,
        fullname: "ADP->ATP",
        type: "cofactor"
    },
    "nadpnadph": {
        x0: 0.19811320754716982,
        y0: 0.08217054263565891,
        dx: 0.047169811320754707,
        dy: 0.09767441860465116,
        fullname: "NADP+ -> NADPH + H+",
        type: "cofactor"
    },
    "co2": {
        x0: 0.26257861635220126,
        y0: 0.16124031007751938,
        dx: 0.017295597484276726,
        dy: 0.013953488372093037,
        fullname: "CO2",
        type: "byproduct"
    },
    "dr5p": {
        x0: 0.21350078492935637,
        y0: 0.19814241486068113,
        dx: 0.0737833594976452,
        dy: 0.015479876160990697,
        fullname: "D-Ribose 5-Phosphate",
        type: "molecule"
    },
    "dhap": {
        x0: 0.2904238618524333,
        y0: 0.1563467492260062,
        dx: 0.05651491365777078,
        dy: 0.020123839009287936,
        fullname: "Dihydroxyacetone Phosphate",
        type: "molecule"
    },
    "dhap2": {
        x0: 0.434850863422292,
        y0: 0.15325077399380804,
        dx: 0.059654631083202514,
        dy: 0.023219814241486086,
        fullname: "Dihydroxyacetone Phosphate",
        type: "molecule"
    },
    "ald": {
        x0: 0.3500784929356358,
        y0: 0.16873065015479877,
        dx: 0.026687598116169553,
        dy: 0.010835913312693485,
        fullname: "Aldolase",
        type: "enzyme"
    },
    "gly3p": {
        x0: 0.3453689167974882,
        y0: 0.17956656346749225,
        dx: 0.09105180533751966,
        dy: 0.012383900928792574,
        fullname: "Glyceraldehyde 3-Phosphate",
        type: "molecule"
    },
    "ppp": {
        x0: 0.25902668759811615,
        y0: 0.06656346749226007,
        dx: 0.06593406593406598,
        dy: 0.020123839009287922,
        fullname: "Pentose Phosphate Pathway",
        type: "pathway"
    },
    "gluta": {
        x0: 0.009419152276295133,
        y0: 0.34829721362229105,
        dx: 0.0423861852433281,
        dy: 0.05417956656346745,
        fullname: "Glutamine",
        type: "molecule"
    },
    "nadnadh": {
        x0: 0.3139717425431711,
        y0: 0.19040247678018576,
        dx: 0.05808477237048665,
        dy: 0.03405572755417957,
        fullname: "2 NAD+ --> 2 NADH + 2 H+",
        type: "cofactor"
    },
    "nadhnad": {
        x0: 0.3987441130298273,
        y0: 0.19349845201238391,
        dx: 0.04866562009419151,
        dy: 0.03250773993808048,
        fullname: "2 NADH + 2 H+ --> 2 NAD+",
        type: "cofactor"
    },
    "13bpg": {
        x0: 0.34850863422291994,
        y0: 0.22445820433436534,
        dx: 0.07692307692307693,
        dy: 0.010835913312693485,
        fullname: "1,3-Bisphosphoglycerate",
        type: "molecule"
    },
    "2adpatp": {
        x0: 0.34222919937205654,
        y0: 0.23684210526315788,
        dx: 0.031397174254317095,
        dy: 0.024767801857585175,
        fullname: "2ADP --> 2ATP",
        type: "cofactor"
    },
    "2atpadp": {
        x0: 0.39717425431711145,
        y0: 0.23839009287925697,
        dx: 0.029827315541601285,
        dy: 0.023219814241486086,
        fullname: "2ATP --> 2ADP",
        type: "cofactor"
    },
    "glucneo": {
        x0: 0.43328100470957615,
        y0: 0.2476780185758514,
        dx: 0.05808477237048665,
        dy: 0.013931888544891663,
        fullname: "Gluconeogenesis",
        type: "pathway"
    },
    "glucolysi": {
        x0: 0.29827315541601257,
        y0: 0.24148606811145512,
        dx: 0.043956043956043966,
        dy: 0.018575851393188847,
        fullname: "Glycolysis",
        type: "pathway"
    },
    "3phosphgly": {
        x0: 0.3516483516483517,
        y0: 0.2631578947368421,
        dx: 0.06750392464678179,
        dy: 0.012383900928792602,
        fullname: "3-Phosphoglycerate",
        type: "molecule"
    },
    "2phosphgly": {
        x0: 0.34850863422291994,
        y0: 0.29876160990712075,
        dx: 0.0737833594976452,
        dy: 0.013931888544891635,
        fullname: "2-Phosphoglycerate",
        type: "molecule"
    },
    "phosphenol": {
        x0: 0.3516483516483517,
        y0: 0.33126934984520123,
        dx: 0.0690737833594976,
        dy: 0.015479876160990724,
        fullname: "Phosphoenolpyruvate",
        type: "molecule"
    },
    "2adp2atp2": {
        x0: 0.29513343799058084,
        y0: 0.34055727554179566,
        dx: 0.03296703296703296,
        dy: 0.026315789473684237,
        fullname: "2ADP --> 2ATP",
        type: "cofactor"
    },
    "phosphenolcarboxyl": {
        x0: 0.4317111459968603,
        y0: 0.3235294117647059,
        dx: 0.08948194662480374,
        dy: 0.030959752321981393,
        fullname: "Phosphoenolpyruvate-carboxykinase; 2GTP --> 2GDP",
        type: "enzyme & cofactor"
    },
    "pyrkin": {
        x0: 0.3328100470957614,
        y0: 0.35139318885448917,
        dx: 0.0423861852433281,
        dy: 0.010835913312693513,
        fullname: "Pyruvate Kinase",
        type: "Enzyme"
    },
    "oxalo": {
        x0: 0.4175824175824176,
        y0: 0.35294117647058826,
        dx: 0.04552590266875978,
        dy: 0.015479876160990669,
        fullname: "Oxaloacetate",
        type: "molecule"
    },
    "pyrcarbox": {
        x0: 0.434850863422292,
        y0: 0.369969040247678,
        dx: 0.08163265306122452,
        dy: 0.024767801857585148,
        fullname: "2ATP --> 2ADP; Pyruvate Carboxylase; Biotin",
        type: "multiple cofactors"
    },
    "pyruvate": {
        x0: 0.3673469387755102,
        y0: 0.37306501547987614,
        dx: 0.03453689167974883,
        dy: 0.01393188854489169,
        fullname: "Pyruvate",
        type: "molecule"
    },
    "22nadhhnad": {
        x0: 0.28414442700156983,
        y0: 0.38699690402476783,
        dx: 0.06593406593406598,
        dy: 0.029411764705882304,
        fullname: "2NADH + H+ --> 2NAD+",
        type: "cofactor"
    },
    "lacdehy": {
        x0: 0.3218210361067504,
        y0: 0.4148606811145511,
        dx: 0.043956043956043966,
        dy: 0.015479876160990669,
        fullname: "Lactate Dehydrogenase",
        type: "enzyme"
    },
    "lactate": {
        x0: 0.27629513343799056,
        y0: 0.42724458204334365,
        dx: 0.03610675039246469,
        dy: 0.010835913312693513,
        fullname: "Lactate",
        type: "molecule"
    },
    "ppih2o": {
        x0: 0.45368916797488223,
        y0: 0.10681114551083591,
        dx: 0.020408163265306145,
        dy: 0.04489164086687307,
        fullname: "H2O --> Pi",
        type: "cofactor?"
    },
    "malate": {
        x0: 0.4097331240188383,
        y0: 0.4117647058823529,
        dx: 0.025117739403453687,
        dy: 0.013931888544891635,
        fullname: "Malate",
        type: "molecule"
    },
    "glutamine": {
        x0: 0.0141287284144427,
        y0: 0.44427244582043346,
        dx: 0.03767660910518053,
        dy: 0.013931888544891635,
        fullname: "Glutamine",
        type: "molecule"
    },
    "glutamate": {
        x0: 0.01726844583987441,
        y0: 0.4984520123839009,
        dx: 0.07221350078492936,
        dy: 0.03405572755417963,
        fullname: "Glutamate",
        type: "molecule"
    },
    "gludehydro": {
        x0: 0.07378335949764521,
        y0: 0.5309597523219814,
        dx: 0.04552590266875982,
        dy: 0.020123839009287936,
        fullname: "Glutamate Dehydrogenase",
        type: "enzyme"
    },
    "nh4": {
        x0: 0.059654631083202514,
        y0: 0.5557275541795665,
        dx: 0.02197802197802197,
        dy: 0.01393188854489169,
        fullname: "NH4+",
        type: "molecule"
    },
    "hco3adp": {
        x0: 0.02197802197802198,
        y0: 0.5634674922600619,
        dx: 0.040816326530612235,
        dy: 0.04334365325077405,
        fullname: "HCO3- + 2ATP --> 2ADP + Pi",
        type: "cofactors"
    },
    "carbaphos": {
        x0: 0.04081632653061224,
        y0: 0.6160990712074303,
        dx: 0.0565149136577708,
        dy: 0.035603715170278605,
        fullname: "Carbamoyl Phosphate",
        type: "molecule"
    },
    "nadpnadphh": {
        x0: 0.08163265306122448,
        y0: 0.5696594427244582,
        dx: 0.08477237048665621,
        dy: 0.01393188854489158,
        fullname: "NAD(P)+ --> NADPH + H+",
        type: "cofactor"
    },
    "alphketo": {
        x0: 0.12872841444270017,
        y0: 0.5526315789473685,
        dx: 0.050235478806907374,
        dy: 0.01238390092879249,
        fullname: "α-Ketoglutarate",
        type: "molecule"
    },
    "aspamino": {
        x0: 0.1554160125588697,
        y0: 0.5325077399380805,
        dx: 0.04709576138147567,
        dy: 0.015479876160990669,
        fullname: "Aspartate Aminotransferase",
        type: "enzyme"
    },
    "mitooxalo": {
        x0: 0.18838304552590268,
        y0: 0.5061919504643962,
        dx: 0.07692307692307693,
        dy: 0.026315789473684292,
        fullname: "Oxaloacetate",
        type: "molecule"
    },
    "asptatae": {
        x0: 0.19152276295133439,
        y0: 0.5479876160990712,
        dx: 0.06279434850863422,
        dy: 0.020123839009287936,
        fullname: "Aspartate",
        type: "molecule"
    },
    "glycerol": {
        x0: 0.5855572998430141,
        y0: 0.07430340557275542,
        dx: 0.028257456828885474,
        dy: 0.032507739938080496,
        fullname: "Glycerol",
        type: "molecule"
    },
    "triglyceride": {
        x0: 0.6112804878048781,
        y0: 0.01951951951951952,
        dx: 0.09451219512195119,
        dy: 0.04654654654654654,
        fullname: "Generic Triglyceride",
        type: "molecule"
    },
    "h2o": {
        x0: 0.6310975609756098,
        y0: 0.06606606606606606,
        dx: 0.018292682926829285,
        dy: 0.012012012012012019,
        fullname: "H2O",
        type: "byproduct"
    },
    "fatty": {
        x0: 0.6326219512195121,
        y0: 0.08108108108108109,
        dx: 0.0777439024390244,
        dy: 0.018018018018018014,
        fullname: "Fatty Acid",
        type: "molecule"
    },
    "coash": {
        x0: 0.6234756097560976,
        y0: 0.1036036036036036,
        dx: 0.027439024390243816,
        dy: 0.012012012012012019,
        fullname: "Coenzyme A",
        type: "molecule"
    },
    "atpamp": {
        x0: 0.6615853658536586,
        y0: 0.0990990990990991,
        dx: 0.03506097560975607,
        dy: 0.019519519519519524,
        fullname: "ATP --> AMP + 2Pi",
        type: "cofactor"
    },
    "acylcoa1": {
        x0: 0.6219512195121951,
        y0: 0.12462462462462462,
        dx: 0.08841463414634143,
        dy: 0.019519519519519524,
        fullname: "Acyl CoA",
        type: "molecule"
    },
    "atpadp3": {
        x0: 0.6067073170731707,
        y0: 0.14414414414414414,
        dx: 0.01981707317073167,
        dy: 0.03003003003003002,
        fullname: "ATP -> ADP",
        type: "cofactor"
    },
    "glyc3phos": {
        x0: 0.586890243902439,
        y0: 0.18468468468468469,
        dx: 0.03353658536585369,
        dy: 0.04054054054054054,
        fullname: "Glycerol 3-Phosphate",
        type: "molecule"
    },
    "nadnadhh3": {
        x0: 0.614329268292683,
        y0: 0.22522522522522523,
        dx: 0.044207317073170715,
        dy: 0.03303303303303304,
        fullname: "NAD+ --> NADH + H+",
        type: "molecule"
    },
    "dihydracephos": {
        x0: 0.5884146341463414,
        y0: 0.2552552552552553,
        dx: 0.06859756097560976,
        dy: 0.04504504504504503,
        fullname: "Dihydroxyacetone Phosphate",
        type: "molecule"
    },
    "triphosisomer": {
        x0: 0.6021341463414634,
        y0: 0.3003003003003003,
        dx: 0.04268292682926822,
        dy: 0.016516516516516533,
        fullname: "Triose Phosphate Isomerase",
        type: "enzyme"
    },
    "glyc3aldphosh": {
        x0: 0.573170731707317,
        y0: 0.3213213213213213,
        dx: 0.07317073170731714,
        dy: 0.05405405405405406,
        fullname: "Glyceraldehyde 3-Phosphate",
        type: "molecule"
    },
    "naaadnadh": {
        x0: 0.5486600846262342,
        y0: 0.3810848400556328,
        dx: 0.04513399153737652,
        dy: 0.026425591098748258,
        fullname: "NAD+ --> NADH + H+",
        type: "cofactor"
    },
    "coashatpadp": {
        x0: 0.46106870229007635,
        y0: 0.40601503759398494,
        dx: 0.08396946564885499,
        dy: 0.01804511278195492,
        fullname: "CoA-SH; ATP --> ADP + Pi",
        type: "cofactor"
    },
    "oxocoash": {
        x0: 0.5450381679389313,
        y0: 0.4195488721804511,
        dx: 0.03511450381679382,
        dy: 0.02105263157894738,
        fullname: "Oxaloacetate + Acetyl-CoA",
        type: "molecule"
    },
    "carncoash": {
        x0: 0.5969465648854961,
        y0: 0.39398496240601505,
        dx: 0.03511450381679393,
        dy: 0.036090225563909784,
        fullname: "Carnitine --> CoA-SH",
        type: "reaction"
    },
    "acylcarn": {
        x0: 0.5877862595419847,
        y0: 0.4345864661654135,
        dx: 0.10076335877862597,
        dy: 0.02105263157894738,
        fullname: "Acylcarnitine",
        notes: "Carnitine shuttle, used to get into the mitochondria since \
        its impermeable to Acyl-CoA",
        type: "molecule"
    },
    "coashcarn": {
        x0: 0.5679389312977099,
        y0: 0.46015037593984964,
        dx: 0.03358778625954206,
        dy: 0.03308270676691727,
        fullname: "CoA-SH --> Carnitine",
        notes: "Swaps back out Carnitine for CoA-SH",
        type: "cofactor"
    },
    "hco3atpadp": {
        x0: 0.6931297709923664,
        y0: 0.36390977443609024,
        dx: 0.036641221374045796,
        dy: 0.045112781954887216,
        fullname: "HCO3- + Biotin + ATP --> ADP + Pi",
        notes: "biotin-dependent carboxylases use ATP and biotin to add \
        carboxyl groups onto molecules (Co-ASH + carboxyl = malonyl coA) \
        and it works by taking CO2 from HCO3- (with an OH being added to phosphoryl to make Pi) \
        and then the CO2 is added to the Acetyl CoA",
        type: "cofactor"
    },
    "malonylcoa": {
        x0: 0.7206106870229008,
        y0: 0.23458646616541354,
        dx: 0.0625954198473282,
        dy: 0.030075187969924783,
        fullname: "Malonyl CoA",
        notes: "",
        type: "molecule"
    },
    "fas": {
        x0: 0.7725190839694657,
        y0: 0.11278195488721804,
        dx: 0.04122137404580151,
        dy: 0.05112781954887219,
        fullname: "Fatty Acid Synthase + accessory proteins",
        notes: "The two SH moieties take place in lipogenesis",
        type: "enzyme"
    },
    "acetylccoa": {
        x0: 0.7419847328244275,
        y0: 0.15639097744360902,
        dx: 0.036641221374045796,
        dy: 0.02105263157894738,
        fullname: "Acetyl CoA",
        notes: "",
        type: "molecule"
    },
    "coassh": {
        x0: 0.8122137404580153,
        y0: 0.17443609022556392,
        dx: 0.01984732824427482,
        dy: 0.01052631578947369,
        fullname: "CoA-SH",
        notes: "CoA-SH now exits to be reused elsewhere, acting as the carrier of the \
        acetyl to be built on during lipogenesis",
        type: "molecule"
    },
    "ace": {
        x0: 0.7572519083969466,
        y0: 0.19548872180451127,
        dx: 0.027480916030534375,
        dy: 0.01954887218045115,
        fullname: "Acetyl",
        notes: "Acetyl group to be the beginning of lipid synthesis",
        type: "molecule"
    },
    "mall": {
        x0: 0.7541984732824427,
        y0: 0.2661654135338346,
        dx: 0.05954198473282446,
        dy: 0.03759398496240601,
        fullname: "Malonyl",
        notes: "Malonyl group to be added on the second SH of FAS, will be the \
        chain to be added onto by the existing acetyl group on the first SH",
        type: "molecule"
    },
    "coasssh": {
        x0: 0.816793893129771,
        y0: 0.2586466165413534,
        dx: 0.021374045801526687,
        dy: 0.010526315789473661,
        fullname: "CoA-SH",
        notes: "",
        type: "byproduct"
    },
    "breathe": {
        x0: 0.8091603053435115,
        y0: 0.3263157894736842,
        dx: 0.022900763358778664,
        dy: 0.010526315789473661,
        fullname: "CO2",
        notes: "CO2 leaves after acetyl is added to malonyl",
        type: "byproduct"
    },
    "aceace": {
        x0: 0.7526717557251908,
        y0: 0.34135338345864663,
        dx: 0.05954198473282446,
        dy: 0.024060150375939837,
        fullname: "Ketoacyl",
        notes: "Acetyl added to back of malonyl to make acetoacetyl group",
        type: "molecule"
    },
    "nadphhnadpp": {
        x0: 0.7816793893129771,
        y0: 0.4120300751879699,
        dx: 0.0625954198473283,
        dy: 0.022556390977443608,
        fullname: "NADPH + H+ --> NADP+",
        notes: "Reduces the ketone on the acetoacetyl to create a tertiary alcohol",
        type: "molecule"
    },
    "drunkcoash": {
        x0: 0.8381679389312977,
        y0: 0.34887218045112783,
        dx: 0.056488549618320616,
        dy: 0.022556390977443608,
        fullname: "Hydroxyacyl",
        notes: "now has an alcohol (the CH2 should say CH)",
        type: "molecule"
    },
    "coashpiss": {
        x0: 0.9389312977099237,
        y0: 0.40902255639097745,
        dx: 0.018320610687022842,
        dy: 0.013533834586466176,
        fullname: "the alcohol leaves and abstracts a hydrogen to make a double bond \
        and now the enoyl",
        notes: "preparation for hydrogenation",
        type: "byproduct"
    },
    "enoyl": {
        x0: 0.9114503816793893,
        y0: 0.3323308270676692,
        dx: 0.06106870229007633,
        dy: 0.021052631578947323,
        fullname: "Enonyl",
        notes: "preparation for hydrogenation",
        type: "byproduct"
    },
    "naaaddhpdd": {
        x0: 0.9618320610687023,
        y0: 0.30526315789473685,
        dx: 0.036641221374045796,
        dy: 0.02857142857142858,
        fullname: "NADPH + H+ --> NADP+",
        notes: "addition of two hydrogens to hydrogenate the double bond",
        type: "cofactor"
    },
    "acylstrikesagain": {
        x0: 0.9038167938931297,
        y0: 0.2571428571428571,
        dx: 0.06412213740458017,
        dy: 0.024060150375939893,
        fullname: "Acyl",
        notes: "addition of two hydrogens to hydrogenate the double bond",
        type: "molecule"
    },
    "shift": {
        x0: 0.8381679389312977,
        y0: 0.17593984962406015,
        dx: 0.05954198473282446,
        dy: 0.022556390977443608,
        fullname: "Acyl",
        notes: "just moves to the other -SH to be added onto by the acetyl",
        type: "molecule"
    },
    "long": {
        x0: 0.8427480916030534,
        y0: 0.11127819548872181,
        dx: 0.08549618320610686,
        dy: 0.013533834586466162,
        fullname: "Acyl CoA",
        notes: "fully formed Acyl CoA now moves to be modified",
        type: "molecule"
    },
    "2atpamppi": {
        x0: 0.9038167938931297,
        y0: 0.07819548872180451,
        dx: 0.03358778625954206,
        dy: 0.03759398496240601,
        fullname: "2 x (ATP --> AMP + PPi)",
        notes: "makes lysophosphatidic acid, then phosphatidic, then diacylglyceral \
        and then triacylglycerol, or a triglyceride",
        type: "cofactor"
    },
    "triglcyaer": {
        x0: 0.8442748091603054,
        y0: 0.013533834586466165,
        dx: 0.09312977099236641,
        dy: 0.0481203007518797,
        fullname: "Triacylglycerol; Triglyceride",
        notes: "",
        type: "product"
    },
    "backtoacet": {
        x0: 0.5954198473282443,
        y0: 0.49022556390977445,
        dx: 0.08702290076335883,
        dy: 0.016541353383458635,
        fullname: "Acetyl CoA",
        notes: "Back to acetyl coA inside the mitochondria",
        type: "molecule"
    },
    "pyrinmit": {
        x0: 0.3709923664122137,
        y0: 0.45112781954887216,
        dx: 0.029007633587786297,
        dy: 0.010526315789473717,
        fullname: "Pyruvate",
        notes: "pyruvate has now been moved into the mitochondria through VDAC \
        and is transported into the intermembrane space by mitochondrial pyruvate carrier 2 (MPC2)",
        type: "molecule"
    },
    "pyrdeh": {
        x0: 0.4015267175572519,
        y0: 0.4556390977443609,
        dx: 0.04274809160305343,
        dy: 0.02105263157894738,
        fullname: "Pyruvate Dehydrogenase Complex",
        notes: "very cool looking protein, begins by removing CO2 from pyruvate, \
        then it adds the remaining H3C-C(=O)-S to a CoA to make Acetyl CoA, and \
        the complex is regenerated by NADH and donating the proton",
        type: "molecule"
    },
    "co22": {
        x0: 0.39083969465648855,
        y0: 0.4706766917293233,
        dx: 0.018320610687022898,
        dy: 0.010526315789473661,
        fullname: "CO2",
        notes: "CO2 leaves and makes acetyl and then acetyl stuck onto CoA to make Acetyl CoA",
        type: "byproduct"
    },
    "nadhahcdhad": {
        x0: 0.3267175572519084,
        y0: 0.46015037593984964,
        dx: 0.05496183206106875,
        dy: 0.028571428571428525,
        fullname: "2NAD+ --> 2NADH + H+",
        notes: "steals two H off the molecule to make oxidation",
        type: "cofactor"
    },
    "aaacteylcoa": {
        x0: 0.36946564885496186,
        y0: 0.48721804511278194,
        dx: 0.035114503816793874,
        dy: 0.010526315789473717,
        fullname: "Acetyl CoA",
        notes: "",
        type: "molecule"
    },
    "h2oacaoash": {
        x0: 0.4015267175572519,
        y0: 0.5142857142857142,
        dx: 0.051908396946564905,
        dy: 0.013533834586466176,
        fullname: "H2O --> CoA-SH",
        notes: "",
        type: "cofactor"
    },
    "citratee": {
        x0: 0.4396946564885496,
        y0: 0.5533834586466165,
        dx: 0.027480916030534375,
        dy: 0.012030075187969946,
        fullname: "Citrate",
        notes: "6 carbon molecule, start of the cycle",
        type: "molecule"
    },
    "isocitratee": {
        x0: 0.47938931297709925,
        y0: 0.5954887218045113,
        dx: 0.035114503816793874,
        dy: 0.012030075187969946,
        fullname: "Isocitrate",
        notes: "6 carbon molecule, movement of an OH",
        type: "molecule"
    },
    "co222": {
        x0: 0.5190839694656488,
        y0: 0.6300751879699248,
        dx: 0.018320610687022953,
        dy: 0.013533834586466176,
        fullname: "CO2",
        notes: "CO2 leaves from isocitrate to make 5 carbon α-ketoglutarate",
        type: "byproduct"
    },
    "alpahaa": {
        x0: 0.47022900763358777,
        y0: 0.6481203007518797,
        dx: 0.04885496183206106,
        dy: 0.010526315789473717,
        fullname: "α-Ketoglutarate",
        notes: "5 carbon molecule",
        type: "molecule"
    },
    "coashco2coahs": {
        x0: 0.5022900763358779,
        y0: 0.6601503759398496,
        dx: 0.02900763358778624,
        dy: 0.03157894736842104,
        fullname: "CoA-SH --> CO2",
        notes: "adding CoA onto the α-ketoglutarate, making a 4 carbon molecule succinyl coA",
        type: "molecule"
    },
    "succinylcoas": {
        x0: 0.4366412213740458,
        y0: 0.6842105263157895,
        dx: 0.04427480916030535,
        dy: 0.012030075187969946,
        fullname: "Succinyl Coa",
        notes: "4 carbon molecule CoA",
        type: "molecule"
    },
    "gdpadppigtpatp": {
        x0: 0.3976982097186701,
        y0: 0.7052896725440806,
        dx: 0.08695652173913043,
        dy: 0.023929471032745564,
        fullname: "GDP (ADP) + Pi --> GTP (ATP)",
        notes: "now a full 4 carbon molecule, takes O off of PO4 to add PO3 to ADP",
        type: "cofactor"
    },
    "succinateee": {
        x0: 0.3648854961832061,
        y0: 0.6857142857142857,
        dx: 0.030534351145038163,
        dy: 0.012030075187969946,
        fullname: "Succinate",
        notes: "now a full 4 carbon molecule",
        type: "molecule"
    },
    "fadh22": {
        x0: 0.300763358778626,
        y0: 0.6781954887218045,
        dx: 0.03816793893129766,
        dy: 0.013533834586466176,
        fullname: "FADH2",
        notes: "the reduction makes two H leave and form a double bond of sorts?",
        type: "cofactor"
    },
    "NADHddd": {
        x0: 0.39556135770234985,
        y0: 0.6126126126126126,
        dx: 0.03263707571801566,
        dy: 0.011583011583011671,
        fullname: "NAD+ --> NADH + H+",
        notes: "most these reactions operate on the basis of \
        NAD-dependent dehydrogenases (generically: oxioreductases) \
        which means they abstract Hs off of the molecules, now some of \
        these remove two Hs and others remove one, malate dehydrogenase \
        for example works like an alcohol dehydrogenase only removing \
        one H. Malate can cross the mito membrane but oxalo cant",
        type: "cofactor"
    },
    "fumarate": {
        x0: 0.32114882506527415,
        y0: 0.6512226512226512,
        dx: 0.03263707571801566,
        dy: 0.012870012870012881,
        fullname: "Fumarate",
        notes: "4 carbon molecule, made during the urea cycle, \
        takes an H2O molecule and adds an OH onto one of the central carbons \
        to make malate",
        type: "molecule"
    },
    "2oh2o": {
        x0: 0.2924281984334204,
        y0: 0.6435006435006435,
        dx: 0.01697127937336812,
        dy: 0.009009009009009028,
        fullname: "H2O",
        notes: "fumarase takes an H2O and adds the OH to fumarate to \
        make malate, then adding the H to the left over carbocation since \
        it adds to an alkene",
        type: "cofactor"
    },
    "maltae": {
        x0: 0.31462140992167104,
        y0: 0.592020592020592,
        dx: 0.024804177545691863,
        dy: 0.015444015444015524,
        fullname: "Malate",
        notes: "can cross the mitochondrial membrane with the \
        help of the malate aspartate shuttle system, which \
        basically the shuttle is just used for redox reactions \
        as it allows NADH in the matrix to be formed since NADH \
        cant cross the membrane itself, only NAD+ can",
        type: "molecule"
    },
    "oxacalate": {
        x0: 0.34856396866840733,
        y0: 0.5534105534105535,
        dx: 0.04308093994778067,
        dy: 0.01158301158301156,
        fullname: "Oxaloacetate",
        notes: "",
        type: "molecule"
    },
    "piiii": {
        x0: 0.13577023498694518,
        y0: 0.7644787644787645,
        dx: 0.018276762402088753,
        dy: 0.01158301158301156,
        fullname: "Pi",
        notes: "the removal of the phosphate from carbamoyl phosphate \
        leaves the C(=O)-NH2 to be added onto ornithine to make citrulline",
        type: "byproduct"
    },
    "citrlune": {
        x0: 0.15013054830287206,
        y0: 0.7915057915057915,
        dx: 0.08485639686684074,
        dy: 0.05405405405405406,
        fullname: "Citrulline",
        notes: "citrulline used for many things such as creating histones, \
        PTM on proteins, etc. but also made in the urea cycle",
        type: "molecule"
    },
    "orthnesa": {
        x0: 0.04177545691906005,
        y0: 0.7953667953667953,
        dx: 0.07571801566579635,
        dy: 0.05920205920205923,
        fullname: "Ornithine",
        notes: "ornithine is made from arginine to dispose of \
        excess nitrogen through the creation of urea",
        type: "molecule"
    },
    "h2opeepee": {
        x0: 0.013054830287206266,
        y0: 0.8378378378378378,
        dx: 0.03133159268929504,
        dy: 0.04890604890604888,
        fullname: "H2O --> Urea",
        notes: "h2o added to make the left end a ketone and let the urea \
        leave while hydrogenating the remaining amide cation",
        type: "cofactor"
    },
    "argnie": {
        x0: 0.044386422976501305,
        y0: 0.8828828828828829,
        dx: 0.07963446475195822,
        dy: 0.027027027027027084,
        fullname: "L-Arginine",
        notes: "one major purpose of the urea cycle is the biosynthesis \
        of the proteinogenic L-arginine",
        type: "molecule"
    },
    "atpppipi": {
        x0: 0.2206266318537859,
        y0: 0.8455598455598455,
        dx: 0.020887728459530047,
        dy: 0.03217503217503215,
        fullname: "ATP --> PPi",
        notes: "AMP is added to the citrulline to make a reactive \
        substition base to add aspartate onto the molecule",
        type: "cofactor"
    },
    "citampint": {
        x0: 0.18407310704960836,
        y0: 0.8828828828828829,
        dx: 0.04569190600522194,
        dy: 0.016731016731016735,
        fullname: "Citrullyl-AMP intermediate",
        notes: "",
        type: "intermediate"
    },
    "asptate": {
        x0: 0.20234986945169714,
        y0: 0.9292149292149292,
        dx: 0.040469973890339406,
        dy: 0.03217503217503215,
        fullname: "Aspartate",
        notes: "added onto the citrulline to begin forming an NH2 group \
        for arginine",
        type: "molecule"
    },
    "ampmpm": {
        x0: 0.17493472584856398,
        y0: 0.9459459459459459,
        dx: 0.023498694516971258,
        dy: 0.01158301158301156,
        fullname: "AMP",
        notes: "AMP leaves the system and allows aspartate to bond to \
        the ctrillune molecule to make arginosuccinate",
        type: "byproduct"
    },
    "argsuck": {
        x0: 0.09399477806788512,
        y0: 0.9330759330759331,
        dx: 0.07571801566579633,
        dy: 0.04375804375804382,
        fullname: "Arginosuccinate",
        notes: "have now built arginosuccinate",
        type: "molecule"
    },
    "fumaratee": {
        x0: 0.009138381201044387,
        y0: 0.9253539253539254,
        dx: 0.04177545691906005,
        dy: 0.03346203346203347,
        fullname: "Fumarate",
        notes: "fumarate has now left to be used in the citric acid cycle",
        type: "molecule"
    },
    "etcnadh": {
        x0: 0.2950391644908616,
        y0: 0.9021879021879022,
        dx: 0.10966057441253269,
        dy: 0.02316602316602312,
        fullname: "NADH --> NAD+ + H+",
        notes: "now the built up NADH can start moving electrons in the ETC \
        in the form of redox reactions",
        type: "molecule"
    },
    "2ecomplex1": {
        x0: 0.34464751958224543,
        y0: 0.879021879021879,
        dx: 0.018276762402088753,
        dy: 0.01029601029601035,
        fullname: "2e-",
        notes: "now the built up NADH can start moving electrons in the ETC \
        in the form of redox reactions",
        type: "molecule"
    },
    "fnmcomplex1": {
        x0: 0.31723237597911225,
        y0: 0.8494208494208494,
        dx: 0.020887728459530075,
        dy: 0.01158301158301156,
        fullname: "FMN (Flavin Mononucleotide)",
        notes: "acts as the electron acceptor, stronger oxidizing agent \
        than NAD and can take part in one and two electron transfers",
        type: "molecule"
    },
    "fnmh2complex1": {
        x0: 0.370757180156658,
        y0: 0.8481338481338482,
        dx: 0.02741514360313313,
        dy: 0.01158301158301156,
        fullname: "FMNH2",
        notes: "has now accepted two electrons",
        type: "molecule"
    },
    "e1complex1": {
        x0: 0.3785900783289817,
        y0: 0.8133848133848134,
        dx: 0.011749347258485643,
        dy: 0.010296010296010238,
        fullname: "e-",
        notes: "has now accepted two electrons",
        type: "molecule"
    }
}

// try to understand why its nad+ + h+ theres a reddit thing talking about hydride
// RH2 + NAD+ → NADH + H+ + R;???