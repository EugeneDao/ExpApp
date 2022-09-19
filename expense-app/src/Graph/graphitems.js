import React from 'react';
function GraphItem(props) {
    
    return (
        <div classname="graph">
            <div style ={{backgroundColor: "#E1CAE4",
            height: '178px',
            width: '21px',
            borderRadius: '50%',
        }}>
            <div style ={{backgroundColor: "#3D15A9",
                        height: `${props.percentage}%`,
                        width: '21px',
                        borderRadius: '50%',
                        margins: 0,
        }}>

        </div>

        </div>

        </div>
    )

}
export default GraphItem;