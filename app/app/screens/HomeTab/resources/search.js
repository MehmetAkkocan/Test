export   const  searchResource= [
    {
        name: "yukleme sehiri",
        title: "Please enter your name:",
        isRequired: true,
        controls:[{type:"text",
                    isRequired:false, 
                    text:"il", 
                    parent:"14" ,
                    name:"il",
                    placeholder:"yuklenecek sehir",
                    onChange:"handleChangemaster"}
                ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }
           ]
        
    }, {
        name: "yükleme ilce",
        type: "text",
        inputType: "date",
        title: "Your birthdate:",
        autoComplete: "bdate",
        controls: [
            {type:"text", 
            isRequired:false, 
            text:"ilce", 
            parent:"value:" ,
            parentvalue:"Controller_il" ,

            placeholder:"yuklenecek ilce",
            onChange:"handleChangemaster"}
      
    ],
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ]
    }, {
        name: "arac tipi",
        type: "text",
        inputType: "color",
        title: "Your favorite color:",
        controls:[
                     {type:"text", 
                     isRequired:false, 
                     text:"arac tipi", 
                    placeholder:"arac tipi",
                    parent:"4" ,
                    onChange:"handleChangemaster"},

                
                ],
                buttons:[
                    {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
                    {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }
        
                ]
        
    }, {
        name: "kasa tipi",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        isRequired: false,
        autoComplete: "email",
        controls:[
            {type:"text", 
            isRequired:false, 
            text:"kasa tipi", 
            parent:"100009" ,
            placeholder:"kasa tipi",
            onChange:"handleChangemaster"}
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ],

        validators: [
            {
                type: "email"
            }
        ]
    }
    , {
        name: "yuk tipi",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        autoComplete: "email",
        controls:[
            {type:"text", 
            isRequired:false, 
            text:"yuk tipi", 
            parent:"9" ,
            placeholder:"yuk tipi",
            onChange:"handleChangemaster"}
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
            {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

        ],

        validators: [
            {
                type: "email"
            }
        ]
    }
   
    , 
    {
        name: "indirme sehiri",
        title: "Please enter your name:",
        isRequired: true,
        controls:[{type:"text", 
                    text:"indirme il", 
                    isRequired:false, 
                    parent:"14" ,
                    placeholder:"indirme il",
                    onChange:"handleChangemaster"}
                ],
        
                buttons:[
                    {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
                    {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }
        
                ]
                
    }, {
        name: "indirme ilce",
        type: "text",
        inputType: "date",
        title: "Your birthdate:",
        autoComplete: "bdate",
        controls: 
            [
            {type:"text", 
            isRequired:false, 
            text:"indirme ilce", 
            parent:"value:" ,
            parentvalue:"Controller_indirme il" ,

            placeholder:"indirme ilce",
            onChange:"handleChangemaster"}
           

    ],
    buttons:[
        {type:"handup" , text:"Back",val:"-1" ,icon:"arrow-left-thick" },
        {type:"handup" , text:"Next",val:"1" ,icon:"arrow-right-thick" }

    ]
}

];