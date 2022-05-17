import React from "react";
import { Tab } from 'semantic-ui-react';
import './AdvanceFilter.css';

function AdvanceFilter(){

const [activeIndex, setActiveIndex] = React.useState(0) 

const handleClickChange = (value) => setActiveIndex(value)
const handleTabChange = (e, { activeIndex }) => setActiveIndex(activeIndex)

const panes = [
  {
    menuItem: 'Valorant',
    render: () => <Tab.Pane attached={false}>Tab 1 Content <button onClick={()=>handleClickChange(2)}>klik sini</button></Tab.Pane>,
  },
  {
    menuItem: 'PUBG',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Mobile Legend',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]

    return(
        <div className="advance-filter">
            <Tab
                menu={{ borderless: true, attached: false, tabular: false }}
                panes={panes}
                activeIndex={activeIndex}
                onTabChange={handleTabChange}
            />
        </div>
    );
}

export default AdvanceFilter;