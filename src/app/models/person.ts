export  class Person{
    public Name:string;
    public Age : number;
    public Email:string;
    public WorkHistory :Array<WorkHistory> =[];
    public Skills :Array<Skills> =[];
    public Address :Address|undefined = undefined;

    constructor(name :string , age:number,email:string)
    {
        this.Name =name;
        this.Age =age;
        this.Email =email;
    }    
}

export class Skills
{
    public SkillName :string ="";
    
}

export class WorkHistory
{
    public CompanyName :string ="";
    public StartDate :Date =new Date();
    public EndDate :Date | undefined =undefined;
    public Description : string ="";
}


export class Address
{
    public Street1 :string ="";
    public Street2 :string ="";
    public city :string ="";
    public PinCode : number =0;
}