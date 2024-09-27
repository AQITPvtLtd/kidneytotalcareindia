import React from "react";
import { treatmentData } from "../data";
import Sidebar from "@/components/common/Sidebar";

const Patient = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:m-16 m-8">
        <div className="lg:block hidden">
          <Sidebar data={treatmentData} />
        </div>
        <div className="col-span-2 mx-5 inline-block">
          <div className="inline-block">
            <h1 className="text-primary font-extrabold text-3xl">
              Patient Education Diabetes
            </h1>
            <div className="border border-lightgreen w-full h-[2px]"></div>
          </div>

          <div>
            <div>
              <h1 className="text-primary font-extrabold text-xl mt-8">
                What is diabetes?
              </h1>

              <p className="text-lg font-bold text-gray-700 mt-1">
                It is a disease that is characterized by an increase in blood
                glucose concentration because the pancreas does not produce, or
                the body does not use, insulin properly.
              </p>
              <p className="text-lg font-bold text-gray-700 mt-1">
                Insulin is an essential hormone for life. All people need
                insulin 24 hours a day in a continuous and variable, that is,
                you do not need the same amount of insulin at all hours. When a
                person eats, they need more insulin and when they do a physical
                activity they need less.
              </p>
              <p className="text-lg font-bold text-gray-700 mt-1">
                The factory of insulin is the pancreas, which is a gland located
                on the left side of the abdomen, very close to the stomach. From
                there, insulin passes into the circulation of blood to be
                distributed throughout the body.
              </p>
              <p className="text-lg font-bold text-gray-700 mt-1">
                Our body needs energy to function, just like a car needs fuel.
                We can obtain this energy from the food we eat. Generally, half
                of what we eat contains carbohydrates (also called sugars or
                carbohydrates), which, once passed to the stomach and intestine,
                are transformed by digestion into glucose, which is the simplest
                sugar. When carbohydrates are in the form of glucose, they pass
                into the blood and it is at this moment when insulin acts.
              </p>
              <p className="text-lg font-bold text-gray-700 mt-1">
                Insulin is necessary for glucose to enter cells as if it were a
                key, and thus glucose can be used as an energy source. Without
                insulin, glucose accumulates in the blood in excess and causes
                hyperglycaemia., and it is eliminated in the urine, which causes
                you to urinate in a large amount (what is called polyuria), and
                you must drink a lot of fluid (polydipsia). The lack of food in
                our cells causes thinning and fatigue
              </p>
            </div>

            <div>
              <h1 className="text-primary font-extrabold text-xl mt-8">
                HOW IS IT DIAGNOSED?
              </h1>
              <p className="text-lg font-bold text-gray-700 mt-1">
                The diagnosis of diabetes is made through an analysis performed
                in the laboratory, measuring the blood glucose. Diagnostic
                criteria are the detection of values ​​of:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>
                  Glycemia Fasting, greater than 126 mg/dl in two different
                  determinations.
                </li>
                <li>
                  Random blood glucose greater than 200 mg/dl accompanied by
                  typical symptoms such as excessive thirst and frequent
                  urination
                </li>
                <li>
                  Values ​​higher than 200 mg/dl, after an oral overload of
                  glucose (or drink with 75 g of glucose).
                </li>
              </ul>

              <p className="text-lg font-bold text-gray-700 mt-1">
                Normal blood glucose values ​​range between 70-100 mg / dL.
              </p>

              <p className="text-lg font-bold text-gray-700 mt-1">
                When the figure is between 100-125 mg/dl, it is considered an
                abnormal fasting glycemia, which is a pre-diabetic state.
              </p>

              <p className="text-lg font-bold text-gray-700 mt-1">
                Another diagnostic criterion is a glycosylated haemoglobin value
                greater than 6.5%. This protein estimates the average glycemia
                of the last 2-3 months.
              </p>
            </div>

            <div>
              <h1 className="text-primary font-extrabold text-xl mt-8">
                IS DIABETES CURE?
              </h1>

              <p className="text-lg font-bold text-gray-700 mt-1">
                It is a chronic disease that has no cure, for now, although an
                effective treatment that allows you to lead a practically normal
                life.
              </p>
            </div>

            <div>
              <h1 className="text-primary font-extrabold text-xl mt-8">
                HOW IS DIABETES TREATED?
              </h1>

              <p className="text-lg font-bold text-gray-700 mt-1">
                Although we will talk more about treatment at another time, it
                is based on the balance of three factors: diet, drugs (either
                oral antidiabetics or insulin) and regular physical exercise
                (especially in people with DM2). The person with diabetes must
                always coordinate these three elements so that the glucose is
                kept most of the time in normal values. To do this, you should
                measure capillary blood glucose with a drop of finger blood with
                some frequency. Dialectological education will allow this
                learning process so that people with diabetes can take an active
                part in making daily decisions about treatment.
              </p>

              <p className="text-lg font-bold text-gray-700 mt-1">
                Diabetes can cause long-term complications from vascular injury
                that can affect the eyes, kidneys, heart, brain, and feet;
                although they can be avoided with adequate glycaemic control.
              </p>

              <div>
                <h1 className="text-primary font-extrabold text-xl mt-8">
                  TYPES OF DIABETES
                </h1>

                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>The most frequent forms are DM 1 and DM2.</li>
                  <li>
                    Gestational diabetes. It is a form of diabetes induced by
                    pregnancy, which appears 3-10% of pregnancies. When the baby
                    is born, diabetes can continue or be “cured.”
                  </li>
                  <li>
                    Secondary diabetes: to medications (corticosteroids,
                    immunosuppressants, …). Diabetes secondary to pancreatic
                    surgery (total or partial removal of this organ)
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="text-primary font-extrabold text-xl mt-8">
                  DIABETES MELLITUS TYPE 1:
                </h1>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  It usually begins in childhood or adolescence (hence the name
                  of juvenile diabetes) but is not exceptional at other ages.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  It represents between 5 to 10% of all cases of diabetes.
                </p>
                <p className="text-lg font-bold text-gray-700 mt-1">
                  It is due to the destruction of insulin-producing pancreas
                  cells, usually by an autoimmune mechanism. Our immune system
                  (which are what we know as defenses) is designed to protect us
                  from external aggression, but in this case, it becomes the
                  aggressor and attacks our body producing the inactivation of
                  beta cells of the pancreas. This results in an absolute
                  deficit of insulin, so it is essential ALWAYS treatment with
                  insulin from the beginning.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  Type 1 diabetes tends to occur suddenly, with a marked
                  increase in thirst (polydipsia) and the amount of urine
                  (polyuria), fatigue and weight loss (despite having eaten much
                  more than usual).
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  Usually, type 1 diabetes appears in isolation, but sometimes
                  there is a history in the family.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  So far, no treatments have been developed to prevent type 1
                  diabetes, although there is much research in this field that
                  we hope will give results soon.
                </p>
              </div>

              <div>
                <h1 className="text-primary font-extrabold text-xl mt-8">
                  DIABETES MELLITUS TYPE 2:
                </h1>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  It is the most common form of diabetes, between 90-95% of all
                  cases.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  It is much more frequent to start in adulthood, hence the
                  popular name of diabetes in older people, although it can be
                  started at any age. It is more frequent in more advanced ages,
                  and especially in obese people. In our environment, of every
                  100 people, 8 have diabetes, although it is estimated that
                  another 6% do not know that they have the disease.
                </p>
                <p className="text-lg font-bold text-gray-700 mt-1">
                  Diabetes mellitus type 2 (DM2) is due to the inability of the
                  body to produce or be able to use insulin properly.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  Type 2 diabetes generally results in symptoms that are
                  generally less evident than type 1 diabetes and often do not
                  cause any discomfort, going unnoticed for a long time. For
                  this reason, many people find out by chance through routine
                  analysis performed for another reason (company reviews,
                  controls for another disease, …) If the glucose values ​​are
                  very high, you may notice the typical symptoms.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  The treatment may vary depending on the stage in which the
                  disease was diagnosed and the evolution of it. Always follow a
                  healthy eating plan, which helps control body weight, along
                  with regular physical activity; It may be necessary to add
                  medication (oral antidiabetics or pills) and sometimes, over
                  the years, may also need insulin.
                </p>
                <p className="text-lg font-bold text-gray-700 mt-1">
                  It is common for other people in the same family to also have
                  diabetes.
                </p>
                <p className="text-lg font-bold text-gray-700 mt-1">
                  It is usually associated with other cardiovascular risk
                  factors, such as hypertension, or alterations of lipids
                  (elevation of cholesterol).
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  Unlike DM1, people at high risk of developing DM2 can prevent
                  and/or delay the onset of DM2 if they maintain correct body
                  weight and perform regular physical activity.
                </p>

                <p className="text-lg font-bold text-gray-700 mt-1">
                  Diabetes is a chronic disease because the pancreas does not
                  produce, or the body does not use, insulin properly. Insulin
                  is essential in type 1 diabetes, while in type 2 diabetes,
                  diet and exercise are the basis of treatment, although oral
                  antidiabetics and/or insulin may be needed later. The diabetic
                  must learn everything necessary about diabetes so that he can
                  enjoy a long and healthy life thanks to the integral treatment
                  of his disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
