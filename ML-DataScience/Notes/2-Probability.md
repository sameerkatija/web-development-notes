## What is Probability theory?

Probability theory is a branch of mathematics that deals with the study of random events and the likelihood of various outcomes. It provides the theoretical foundation for understanding and modeling uncertainty, randomness, and chance. In probability theory, events are represented as subsets of a sample space, and probability is a measure of the likelihood of these events occurring.

Overall, probability theory provides the tools to model real-world situations involving uncertainty, such as in statistics, economics, engineering, and various other fields.

## **Sample Space `S` or `Ω`:**

The set of all possible outcomes of a random experiment.

**Example:** If flipping a coin, the sample space is Ω = { 𝐻, 𝑇 }, where `𝐻` represents heads and `𝑇` represents tails.

## **Event:**

Any subset of the sample space, representing a specific outcome or a set of outcomes.

**Example:** In a coin flip, the event `𝐴` might be the event "getting heads," so 𝐴 = { 𝐻 }.

## **Probability `P(A)`:**

The probability that event `𝐴` occurs. It is a value between 0 and 1, where 0 means the event will never occur and 1 means it is certain to occur.

**Example:** For a fair coin, `𝑃(𝐻) = 0.5` because heads is one of two equally likely outcomes.

## Degree of Belief

Degree of Belief is a concept in probability theory that quantifies an individual's confidence or belief in the occurrence of a specific event given the available information.

**Example:** Imagine you are considering whether it will rain tomorrow. Based on the weather forecast, your past experiences, and your understanding of weather patterns, you assign a degree of belief to the event "it will rain tomorrow."

- **Your Degree of Belief**: After checking the forecast, you believe there's an 80% chance that it will rain tomorrow.
  - **In probability terms**, this would be `𝑃(Rain)=0.8` or `80%`.
  - This means you are quite confident that rain will occur, but you're not 100% certain.

You might adjust your degree of belief as you get new information (e.g., a more detailed weather report or seeing dark clouds).

The degree of belief is often expressed as a probability (between 0 and 1) or a percentage (between 0% and 100%), and it can change as new information or evidence becomes available.

This concept is widely used in `decision theory`, `Bayesian statistics`, `forecasting`, and `many areas where uncertainty plays a key role`.

## Probability Axioms (Kolmogorov's Axioms)

The probability axioms are a set of three fundamental principles introduced by Andrey Kolmogorov in the 1930s to provide a rigorous foundation for probability theory. These axioms define how probability functions behave and what properties they must satisfy. They form the foundation of modern probability theory.

> In mathematics and logic, `axioms` are fundamental statements or propositions that are assumed to be true without proof.

> A proposition is a statement that is either true or false, but not both.

### 1. Non-Negativity Axiom (Non-Negativity)

- **Statement:** The probability of any event `𝐴` is always a non-negative number.
- **Mathematical Representation:** `P(A)≥0`
- **Interpretation:** The probability of an event can never be negative. This reflects the fact that probability is a measure of likelihood or belief, and these are always non-negative quantities.

### 2. Additivity Axiom (Additive Rule for Disjoint Events)

- **Statement:** If two events `𝐴` and `𝐵` are disjoint (mutually exclusive), then the probability of either event `𝐴` or event `𝐵` occurring is the sum of their individual probabilities.
- **Mathematical Representation:** `P(A∪B) = P(A) + P(B) if A ∩ B = ∅`
- **Interpretation:** If events `A` and `B` cannot both happen at the same time (i.e., they are mutually exclusive), then the probability that either `𝐴` or `𝐵` happens is simply the sum of their individual probabilities.

### 3. Normalization Axiom (Unit Measure)

- **Statement:** The probability of the entire sample space `Ω` is equal to `1`.
- **Mathematical Representation:** `P(Ω) = 1`
- **Interpretation:** The probability of the sample space (which contains all possible outcomes of the experiment) is 1. This means that something in the sample space will definitely happen.

**Example:** When flipping a coin, the sample space is `Ω={H,T}`, and the probability of the entire sample space is `P(Ω)=P({H,T})=1`, meaning that either heads or tails must occur.

## Law of Large numnbers

The Law of Large Numbers is a fundamental theorem in probability and statistics that describes the result of performing the same experiment many times. The law states that as the number of trials (or observations) increases, the sample mean (average) of the results will converge to the expected value (or population mean) of the random variable being observed.

In Short, the more experiments we run, the closer we will tend to get to the expected probability.

## Gambler's Fallacy

The Gambler's Fallacy is a common misconception or cognitive bias that occurs when someone believes that future events in a random process are influenced by past events, even though they are independent. Specifically, it is the belief that after a certain outcome has occurred multiple times in a row (e.g., heads in a coin flip, or black in roulette), the opposite outcome is "due" or more likely to happen in the future, even though each trial is independent and the probabilities remain unchanged.

## Random variable

A random variable is a variable that can take on different values, depending on chance or probability. It's a way to describe the uncertainty or randomness of an outcome.

Examples:

- Rolling a die (random variable: any number on the die from 1 to 6)
- Flipping a coin (random variable: heads or tails)
- Drawing a card from a deck (random variable: card value)

A random variable is like a question you ask about the outcome of the coin flip. For example:

- "How many heads will I get?"
- "Will the coin land on heads or tails?"
- "What's the probability of getting heads?"

Random variables can be either:

- **Discrete random variable:** Takes countable values (e.g., number of heads in coin flips).
- **Continuous random variable:** Takes any value within a range (e.g., height or time).

### Discrete Random Variables

Discrete random variables have a countable number of distinct values. You can list out all the possible outcomes, and there are gaps between the values. Discrete random variables often involve counting or enumerating outcomes.

**Examples**

1. **Rolling a die:** The possible outcomes are 1, 2, 3, 4, 5, and 6. You can count the number of distinct values.
2. **Number of heads in 5 coin flips:** The possible outcomes are 0, 1, 2, 3, 4, and 5 heads. Again, you can count the number of distinct values.
3. **Number of students in a class:** The possible outcomes are whole numbers (e.g., 20, 25, 30). You can count the number of students.

### Continuous Random Variables

Continuous random variables can take on any value within a range or interval. You can't count the number of distinct values, as there are infinitely many possibilities. Continuous random variables often involve measuring or quantifying outcomes.

**Examples**

1. **Height of a person:** Height can take on any value within a range (e.g., 150.5 cm, 175.2 cm, 182.1 cm). You can't count the number of distinct values.
2. **Weight of an object:** Weight can take on any value within a range (e.g., 50.3 kg, 75.9 kg, 102.1 kg). Again, you can't count the number of distinct values.
3. **Time taken to complete a task:** Time can take on any value within a range (e.g., 10.5 minutes, 20.2 minutes, 35.8 minutes). You can't count the number of distinct values.

## Sample Space vs Randome Variable

Imagine you have a big jar of colored marbles, and you want to predict what color marble you'll pick when you reach in.

- **Sample Space:** The sample space is like the whole jar of marbles. It's the collection of all possible outcomes or results. In this case, the sample space would be all the different colored marbles in the jar.
- **Random Variable:** A random variable is like a question you ask about the marble you pick. For example, "What color is the marble?" or "Is the marble red or not?" The random variable is a way to assign a value or label to each outcome in the sample space.

Think of it like this:

- **Sample Space:** The whole jar of marbles (all possible outcomes)
- **Random Variable:** A question or label you assign to each marble (like "color" or "is red?")

When you pick a marble, the random variable (color) takes on a specific value (like "red" or "blue").

## Probability Mass Function `(PMF)`

The Probability Mass Function (PMF) is a function that describes the probability distribution of a discrete random variable. It assigns a probability to each possible value of the random variable.

Given a discrete random variable X, the Probability Mass Function (PMF) is a function f(x) that satisfies:

1. `f(x) ≥ 0` for all x
2. `∑f(x) = 1`, where the sum is taken over all possible values of x
3. `f(x) = P(X = x)`, the probability that X takes on the value x

**Properties:**

1. The PMF is non-negative.
2. The PMF sums up to 1.
3. The PMF assigns a probability to each possible value of the random variable.

**Example:**

Suppose we roll a fair six-sided die. The PMF for the random variable X (the number on the die) is:

- `f(1) = 1/6`
- `f(2) = 1/6`
- `f(3) = 1/6`
- `f(4) = 1/6`
- `f(5) = 1/6`
- `f(6) = 1/6`

The PMF gives the probability distribution of a discrete random variable, specifying the likelihood of each possible outcome. In this example, the PMF assigns a probability of 1/6 to each possible value of the random variable X.

## Probability Density Function `(PDF)`

A Probability Density Function (PDF) is a function that describes the likelihood of a continuous random variable taking a particular value. Unlike discrete random variables, which use a probability mass function (PMF), the PDF is used for continuous random variables.

1. `f(x) ≥ 0` for all x
2. `∫f(x)dx = 1`, where the integral is taken over all possible values of x
3. `P(a ≤ X ≤ b) = ∫[a, b] f(x)dx`, which represents the probability that X falls within the interval [a, b]

**Key Points:**

1. The PDF does not give the probability of the random variable taking a specific value. Instead, it gives the density of probability at a given point.
2. The probability that a continuous random variable `𝑋` falls within a specific interval is given by the area under the curve of the PDF over that interval.
3. The total area under the curve of a PDF is always 1 `∫f(x)dx = 1` where `f(x)` is the PDF

**Properties:**

1. **Non-negativity:** `f(x) ≥ 0` for all x
2. **Normalization:** `∫f(x)dx = 1`
3. **Probability interpretation:** `P(a ≤ X ≤ b) = ∫[a, b] f(x)dx`

The PDF is a powerful tool for modeling and analyzing continuous random variables.
