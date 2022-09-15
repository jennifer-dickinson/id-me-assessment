import { useMemo } from "react";
import { Category } from "../model";

interface Props {
    category: Category
}

const CategoryBadge: React.FC<Props> = ({category}) => {
    
    const [borderColor, color] = useMemo(() => {
        switch(category) {
            case Category.TECHNOLOGY:
                return [ '#CDCED9', '#000000',]
            case Category.SHOPPING:
                return ['#98D4A9', '#118632']
            case Category.ENTERTAINMENT:
                return ['#89A7E0', '#2E5AAC']
            case Category.AUTOMOTIVE:
                return ['#FF8577', '#D94130']
            case Category.FOOD:
                return ['green', 'darkGreen']
            default:
                return [] 
        }
    }, [category])
    return <div style={{color, borderColor, borderWidth: 2, borderStyle: 'solid', borderRadius: 2, paddingTop: 3, paddingBottom: 3, paddingLeft: 12, paddingRight: 12, display: 'inline-block', fontWeight: 700}}>
        {category}
    </div>;
}

export default CategoryBadge;