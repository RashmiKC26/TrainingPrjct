export class LinkedIn
{
    public id :number | undefined
    public inputText:string = "";

}


export class LinkedInList
{
    public id :number | undefined
    public inputText:string = "";
    public createdOn :Date | undefined;
    public  linkedInComments: LinkedInComments | undefined;
    public  linkedInLikes: LinkedInLike | undefined;
    public highlightTrue:boolean =false;
    
}

export class LinkedInComments
{
    public id :number | undefined;
    public postId :number | undefined
    public comments :string ="";
    public createdOn :Date | undefined;
}

export class LinkedInLike
{
    public liked :boolean =false;
}
