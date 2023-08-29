import UiKiaAndH from "../../ui/uiDetails/UiKiaAndH";

function KiaAndHundia() {


    return (
        <div>
            <UiKiaAndH items={{
                obj: {
                    name: 'hundai',
                    arr1: [{
                        model: ['tucson', 'solaris', 'accent'],
                        // eqipment: [{
                        //     value: ['top', 'top2', 'top3']
                        // }]
                    }]
                }
            }}/>
        </div>
    )
}

export default KiaAndHundia;