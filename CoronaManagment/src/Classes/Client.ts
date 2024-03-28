
export class Client{
    constructor(
    public id:number,
    public identityClient: string,
    public firstName: string,
    public lastName:string,
    public address :string,
    public birthDate: Date,
    public phone: string,
    public mobilePhone?: string,
    public img?: string,

    ){}
    

}