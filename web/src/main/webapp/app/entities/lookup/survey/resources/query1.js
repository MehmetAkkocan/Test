export   const  query1= [
    {
        name: "yukleme sehiri",
        title: "Please enter your name:",
        isRequired: true,
        controls:[{type:"text", 
                    text:"il", 
                    parent:"14" ,
                    name:"il",
                    placeholder:"yuklenecek sehir",
                    onChange:"handleChangemaster"}
                ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
            {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
           ]
        
    }, {
        name: "yükleme ilce",
        type: "text",
        inputType: "date",
        title: "Your birthdate:",
        isRequired: true,
        autoComplete: "bdate",
        controls: [
            {type:"text", 
            text:"ilce", 
            parent:"value:" ,
            parentvalue:"Controller_il" ,

            placeholder:"yuklenecek ilce",
            onChange:"handleChangemaster"}
            ,

            {type:"textarea", 
            text:"adres", 
            placeholder:"adress",
            }
    ],
    buttons:[
        {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
        {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
       ]
    
    }, {
        name: "arac tipi",
        type: "text",
        inputType: "color",
        title: "Your favorite color:",
        controls:[
                     {type:"text", 
                    text:"arac tipi", 
                    placeholder:"arac tipi",
                    parent:"4" ,
                    onChange:"handleChangemaster"},

                
                ],
                buttons:[
            {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
            {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
           ]
        
    }, {
        name: "kasa tipi",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        isRequired: true,
        autoComplete: "email",
        controls:[
            {type:"text", 
            text:"kasa tipi", 
            parent:"100009" ,
            placeholder:"kasa tipi",
            onChange:"handleChangemaster"}
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
            {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
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
        isRequired: true,
        autoComplete: "email",
        controls:[
            {type:"text", 
            text:"yuk tipi", 
            parent:"9" ,
            placeholder:"araç tipi",
            onChange:"handleChangemaster"}
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
            {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
           ],

        validators: [
            {
                type: "email"
            }
        ]
    }
    , {
        name: "yuk iceriği",
        type: "text",
        inputType: "email",
        title: "Your e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        isRequired: true,
        autoComplete: "email",
        controls:[
            {type:"textarea", 
            text:"yuk iceriği", 
            name:"yuk_icerigi",
            placeholder:"yuk iceriği",
            }
            
        ],
        
        buttons:[
            {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
            {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
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
                    parent:"14" ,
                    placeholder:"yuklenecek sehir",
                    onChange:"handleChangemaster"}
                ],
        
                buttons:[
                    {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
                    {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
                   ]
                
                
    }, {
        name: "indirme ilce",
        type: "text",
        inputType: "date",
        title: "Your birthdate:",
        isRequired: true,
        autoComplete: "bdate",
        controls: 
            [
            {type:"text", 
            text:"ilce", 
            parent:"value:" ,
            parentvalue:"Controller_indirme il" ,

            placeholder:"yuklenecek ilce",
            onChange:"handleChangemaster"}
            ,

            {type:"textarea", 
            text:"indirme_adres", 
            placeholder:"adress",
            }

    ],
    buttons:[
        {type:"handup" , text:"Back",val:"-1" , icon:"arrow-left" },
        {type:"handup" , text:"Next",val:"1" , icon:"arrow-right" }
       ]    
}

];