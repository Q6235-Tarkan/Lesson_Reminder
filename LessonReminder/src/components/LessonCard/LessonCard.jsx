import { data } from "../../helper/data"


function LessonCard() {
    const array=Object.keys(data).map(key=>({
        key:key,
        value:data[key]
    }))
   
    
        return (
            <div className="container">
            {array.map(item=>(
            

                <div className="images">
                    <img src={item.value.image} alt="" />
                    <div className="NameHour">
                    <p className="lessonname">Lesson Name : <span>{item.value.name}</span></p>
                    <p>Lesson Hour : <span>{item.value.hour}</span></p>
                    </div>
                </div>

            ))} 
               
            </div>
        );
   

    
}

export default LessonCard


