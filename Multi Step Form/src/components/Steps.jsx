import {
  Form,
  Plans,
  Box,
  Switch,
  CheckBox,
  Thanks,
  Warning,
  Flex,
} from "./StyledComponents";
import pic5 from "./images/icon-thank-you.svg";

export const Step1 = ({ Inname, Inemail, InphoneNum, dispatch, emtyField }) => {
  return (
    <>
      <Form>
        <>
          <div>
            <h1>Personal info</h1>
            <p>Please provide your name, email, address and phone number</p>
          </div>
          <div>
            <Flex>
              <label htmlFor="name">Name</label>
              <Warning 
              displayNone={emtyField === 0}>
                This Field is Required
              </Warning>
            </Flex>
            <input
              id="name"
              style={{borderColor: emtyField=== 0 ? 'red' :''}}
              type="text"
              placeholder="e.g. Stephen King"
              name="name"
              value={Inname}
              onChange={(e) =>
                dispatch({ type: "Inname", value: e.target.value })
              }
              required
            ></input>
          </div>

          <div>
            <Flex>
              <label htmlFor="emailAddress">Email Address</label>
              <Flex>
              <Warning displayNone={emtyField === 1}>
                This Field is Required
              </Warning>
              <Warning displayNone={emtyField === '@'} >
                Use @ for email
              </Warning>
              </Flex>
            </Flex>
            <input
              type="email"
              id="emailAddress"
              style={{borderColor: emtyField=== '@' || emtyField === 1 ? 'red' :''}}
              placeholder="e.g. StephenKing@lorem.com"
              name="emailAddress"
              value={Inemail}
              onChange={(e) =>
                dispatch({ type: "Inemail", value: e.target.value })
              }
              required
            ></input>
          </div>

          <div>
            <Flex>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Warning displayNone={emtyField === 2} className="hide">
                This Field is Required
              </Warning>
              <Warning displayNone={emtyField === 10} >
                Enter a valid number 
              </Warning>
            </Flex>
            <input
              type="number"
              style={{borderColor: emtyField=== 10 || emtyField === 2 ? 'red' :''}}
              id="phoneNuber"
              placeholder="e.g. +1 234567890"
              name="phoneNumber"
              value={InphoneNum}
              onChange={(e) =>
                dispatch({ type: "InphoneNum", value: e.target.value })
              }
              required
            ></input>
          </div>
        </>
      </Form>
    </>
  );
};

export const Step2 = ({
  dispatch,
  isPlanSelected,
  isYearorMonth,
  setIsYearorMonth,
  setIsPlanSelected,
  arrrayOfPlansYearandMonthe2,
}) => {
  return (
    <Form>
      <div>
        <h1>Select your plan</h1>
        <p>you have the option of yearly or monthly billing</p>
      </div>
      <Plans>
        {arrrayOfPlansYearandMonthe2[isYearorMonth ? 1 : 0].map((value, i) => (
          <Box
            isPlanSelected={isPlanSelected === value.num}
            key={i}
            onClick={() => {
              setIsPlanSelected(value.num);
              dispatch({ type: "setIsPlan", value: isPlanSelected });
            }}
          >
            <img src={value.image} alt="" />
            <div>
              <h4>{value.type}</h4>
              <p>{value.price}</p>
              <p className="offer">{isYearorMonth ? "2 Months Free" : ""}</p>
            </div>
          </Box>
        ))}
      </Plans>
      <div className="MOY">
        <label
          style={{
            color: isYearorMonth ? "rgb(125, 127, 138)" : "hsl(213, 96%, 18%)",
          }}
          className="mo"
        >
          Monthly
        </label>
        <Switch className="toggle_switch">
          <input
            type="checkbox"
            id="toggle"
            defaultChecked={isYearorMonth}
            onClick={(e) => {
              setIsYearorMonth(e.target.checked);
              dispatch({ type: "setIsYearly", value: !isYearorMonth });
            }}
          />
          <label htmlFor="toggle" className="slider"></label>
        </Switch>
        <label
          style={{
            color: !isYearorMonth ? "rgb(125, 127, 138)" : "hsl(213, 96%, 18%)",
          }}
          className="yo"
        >
          Yearly
        </label>
      </div>
    </Form>
  );
};
export const Step3 = ({
  isYearly,
  isChecked,
  setIsChecked,
  arrrayOfPlansYearandMonthe,
}) => {
  return (
    <Form>
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help you enhance you gaming experience</p>
        <div className="service">
          {arrrayOfPlansYearandMonthe[isYearly ? 1 : 0].map((value, i) => (
            <CheckBox key={i} chek={isChecked.includes(value.num)}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  defaultChecked={isChecked.includes(value.num)}
                  onClick={(e) => {
                    if (isChecked.includes(value.num)) {
                      setIsChecked(isChecked.filter((v) => v !== value.num));
                    } // remove value.num
                    else {
                      setIsChecked([...isChecked, value.num]);
                    } // add value.num
                  }}
                />
                <div>
                  <h2>{value.head}</h2>
                  <p>{value.para}</p>
                </div>
                <span>{value.price}</span>
              </label>
            </CheckBox>
          ))}
        </div>
      </div>
    </Form>
  );
};
export const Step4 = ({
  setSteps,
  addons,
  isYearorMonth,
  isChecked,
  plans,
  isPlanSelected,
}) => {
  let saveOfValue;
  let price = 0;
  isChecked.map((v) => {
    saveOfValue = addons[isYearorMonth ? 1 : 0][v].price;
    price += parseInt(saveOfValue.split("$")[1].split("/")[0]);
  });

  saveOfValue = plans[isYearorMonth ? 1 : 0][isPlanSelected].price;
  price += parseInt(saveOfValue.split("$")[1].split("/")[0]);

  return (
    <Form>
      <div>
        <h1>Finishing up</h1>
        <p>Dobule-check everything look OK before confirming</p>
        <div className="margin">
          <div className="plan">
            <div>
              <h2>
                {plans[isYearorMonth ? 1 : 0][isPlanSelected].type} &#x28;{" "}
                {isYearorMonth ? "Yearly" : "Monthly"} &#x29;
              </h2>
              <p
                className="change"
                onClick={() => {
                  setSteps(2);
                }}
              >
                Change
              </p>
            </div>
            <div>
              <span>{plans[isYearorMonth ? 1 : 0][isPlanSelected].price}</span>
            </div>
          </div>
          <div className="addons">
            {isChecked.map((v, i) => (
              <div key={i}>
                <p>{addons[isYearorMonth ? 1 : 0][v].head}</p>
                <span>{addons[isYearorMonth ? 1 : 0][v].price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="total">
          <div>
            <p>Total &#x28; per {isYearorMonth ? "year" : "month"} &#x29; </p>

            <div className="totalamount">
              +${price}/{isYearorMonth ? "yr" : "mo"}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export const Step5 = () => {
  return (
    <Thanks>
      <div>
        <img src={pic5} alt="" />
      </div>
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! hope you have fun using our
        platform. if you need ever need support please feel free to email us at
        support@loremgaming.com.
      </p>
    </Thanks>
  );
};
