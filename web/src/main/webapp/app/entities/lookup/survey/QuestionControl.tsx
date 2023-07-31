import React, { useState, useEffect } from 'react';
import { Row, Col, Button, ButtonGroup, Label } from 'reactstrap';

import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';


import Finish from "./Finish";
import { ButonDisabled } from "./ButonDisabled";
import { Translate, translate } from 'react-jhipster';

import { getEntitiesParent } from '../lookup.reducer';

import InputList from './input-list';
import { IRootState } from 'app/shared/reducers';



/* eslint-disable no-console */

/* eslint no-eval: 0 */

export const QuestionControl = (props) => {

    const selectedColor = 'primary';
    const [cssColor, setCssColor] = useState(selectedColor);
    const [inputValue, setInputValue] = useState({});
    const [inputValueList, setInputValueList] = useState(-1);



    // const  handleClick =(e) => {
    //     console.log("Button value",e);
    //     props.handleClick(e)
    //     setCssColor(selectedColor);
    // }

    const handleChange = (event) => {
        props.handleData(event);

        // inputValue[  event.target.id] = event.target.value;
        // console.warn(inputValue);


    }

    const handleChangemaster = (event) => {

        console.warn(event.target.value);
        props.handleData(event);
        // inputValue[  event.target.id] = event.target.value;
        // console.warn(inputValue);


    }

    // console.log(getEntitiesParent(0).payload);

    return (


        <div className="query-area">


            <AvForm model={props.savedData} onSubmit={() => { }}>
                {props.buttons.map(control =>

                    <Row key={control.text} style={{ marginBottom: "5vh" }}>
                        <div className="input-text-area">
                            <Translate contentKey={"TestApp.lookup.wizard." + control.text}>{control.text}</Translate>
                        </div>
                        {"parent" in control
                            ? <Col className="input-area">
                                <InputList match=
                                    {{
                                        "isExact": false, "path": "", "url": "",
                                        "params":
                                        {
                                            "id": control.parent.startsWith("value:")
                                                ? props.handleDataGet(control.parentvalue)
                                                : `${control.parent}`,
                                            "data": props.handleDataGet(`Controller_${control.text}`),
                                            "placeholder": control.placeholder,
                                            "name": `Controller_${control.text}`,
                                            "onChange": control.onChange ? eval(control.onChange) : () => { }
                                        }
                                    }}

                                />

                            </Col>

                            : <Col className="input-area">
                                <AvInput
                                    type={control.type}
                                    id={`Controller_${control.text}`}
                                    name={`Controller_${control.text}`}
                                    placeholder={control.text}
                                    onChange={handleChange}
                                    value={props.handleDataGet(`Controller_${control.text}`)}
                                    required
                                />


                            </Col>
                        }


                    </Row>
                )}
            </AvForm>

        </div>


    );

}

