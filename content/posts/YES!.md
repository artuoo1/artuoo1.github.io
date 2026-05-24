# (Calculus – Midterm 2 Mastery Guide: Sections 7.3, 7.4, 7.8, 8.1, 8.2, 9.1, 9.2, 9.3)

This guide follows the **Learning Template Mastery** and **Prompt Application Mastery** protocols. We will prioritize the most high-stakes and difficult topics first: **Trigonometric Substitution**, **Separable Equations**, and **Partial Fractions**.
![[Pasted image 20260524002005.png]]
---

### (Calculus – Section 7.3 Trigonometric Substitution)

**Deep Explanation for Mastery of the Subject**: Trigonometric Substitution is a specialized technique designed to eliminate radicals of the form $\sqrt{a^{2}-x^{2}}$, $\sqrt{a^{2}+x^{2}}$, and $\sqrt{x^{2}-a^{2}}$. The core logic is to use the **Pythagorean Identities** ($1-\sin^{2}\theta = \cos^{2}\theta$ and $1+\tan^{2}\theta = \sec^{2}\theta$) to transform a square root into a single trigonometric squared term, allowing the radical to be simplified.

- **Substitutions to Memorize**:
    1. For $\sqrt{a^{2}-x^{2}}$, use $x=a\sin\theta$.
    2. For $\sqrt{a^{2}+x^{2}}$, use $x=a\tan\theta$.
    3. For $\sqrt{x^{2}-a^{2}}$, use $x=a\sec\theta$.

**Analysis Tip**: After integrating in terms of $\theta$, you **must** return to $x$. The most reliable method is the **Reference Triangle Method**: draw a right triangle where the sides are defined by your original substitution (e.g., if $\sin\theta = x/a$, then opposite side is $x$ and hypotenuse is $a$).


#### Core Topic Example: Radical Integration

**Problem**: Evaluate $\int\frac{\sqrt{9-x^{2}}}{x^{2}}dx$.

**Polya’s Four-Step Process**:

1. **Understand the Problem**: The integrand contains $\sqrt{9-x^{2}}$, which fits the form $\sqrt{a^{2}-x^{2}}$ where $a=3$. A standard $u$-substitution fails because there is no $x$ outside to match $du$.
2. **Think of a Plan**: Use the substitution $x=3\sin\theta$. Then $dx=3\cos\theta d\theta$ and $\sqrt{9-x^{2}}=\sqrt{9-9\sin^{2}\theta}=3\cos\theta$.
3. **Carry Out the Plan**:
    - $\int\frac{3\cos\theta}{9\sin^{2}\theta}(3\cos\theta)d\theta = \int\frac{9\cos^{2}\theta}{9\sin^{2}\theta}d\theta = \int\cot^{2}\theta d\theta$.
    - Use trig identity: $\cot^{2}\theta = \csc^{2}\theta - 1$.
    - $\int(\csc^{2}\theta - 1)d\theta = -\cot\theta - \theta + C$.
    - **Reference Triangle**: Since $\sin\theta = x/3$, the opposite is $x$, hypotenuse is $3$, and adjacent side is $\sqrt{9-x^{2}}$. Thus, $\cot\theta = \frac{\sqrt{9-x^{2}}}{x}$ and $\theta = \arcsin(x/3)$.
    - Final Answer: $-\frac{\sqrt{9-x^{2}}}{x} - \arcsin(\frac{x}{3}) + C$.
4. **Look Back**: Differentiating the result is complex, so double-check the triangle sides and the identity $\cot^{2}\theta = \csc^{2}\theta - 1$.

---

### (Calculus – Section 9.3 Separable Equations)

**Deep Explanation for Mastery of the Subject**: A **Separable Equation** is a first-order differential equation where the expression for $dy/dx$ can be factored as a product of a function of $x$ and a function of $y$: $\frac{dy}{dx}=f(x)g(y)$. Mastery involves algebraically moving all $y$ terms (including $dy$) to one side and all $x$ terms (including $dx$) to the other before integrating both sides.

**Analysis Tip**: When you integrate $1/y$, you get $\ln|y|$. To solve for $y$, you exponentiate: $e^{\ln|y|} = e^{f(x)+C}$. This simplifies to $|y| = e^{C}e^{f(x)}$, which can be written as $y = Ae^{f(x)}$, where $A$ is a constant that can be positive or negative.

#### Core Topic Example: Initial-Value Problem

**Problem**: Solve $\frac{dy}{dx} = \frac{x^{2}}{y^{2}}$ given $y(0)=2$.

1. **Understand**: We have a differential equation where $x$ and $y$ are easily separated. We also have an initial condition to find the specific constant $C$.
2. **Plan**: Cross-multiply to get $y^{2}dy = x^{2}dx$, then integrate both sides.
3. **Carry Out**:
    - $\int y^{2}dy = \int x^{2}dx \implies \frac{1}{3}y^{3} = \frac{1}{3}x^{3} + C$.
    - Multiply by $3$: $y^{3} = x^{3} + K$ (where $K=3C$).
    - Apply $y(0)=2$: $2^{3} = 0^{3} + K \implies K=8$.
    - Final Answer: $y = \sqrt{x^{3}+8}$.
4. **Look Back**: Test the solution by differentiating. $\frac{dy}{dx} = \frac{1}{3}(x^{3}+8)^{-2/3}(3x^{2}) = \frac{x^{2}}{(x^{3}+8)^{2/3}} = \frac{x^{2}}{y^{2}}$. It works.

---

### (Calculus – Section 7.4 Partial Fractions)

**Deep Explanation for Mastery of the Subject**: This technique is used to integrate rational functions $P(x)/Q(x)$ by decomposing them into a sum of simpler fractions.

1. **Step 1: Long Division**: If the degree of $P(x) \ge$ degree of $Q(x)$, you **must** perform long division first.
2. **Step 2: Factor $Q(x)$**: Factor the denominator completely into linear or irreducible quadratic factors.
3. **Step 3: Decomposition**:
    - Distinct linear factors $(x-r)$: add $A/(x-r)$.
    - Repeated linear factors $(x-r)^{n}$: add terms for every power up to $n$.

**Analysis Tip**: For exam speed, use the **"Cover-up Method"** for distinct linear factors to find constants $A, B, C$ quickly.

---

### Midterm 2 Essentials: Formulas & Identities Chart

|Section|Topic|Key Formula / Tool|
|:--|:--|:--|
|**7.3**|**Trig Sub**|$a^{2}+x^{2} \implies x=a\tan\theta$|
|**7.4**|**Partial Fractions**|$\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$|
|**7.8**|**Improper Integrals**|$\int_{a}^{\infty}f(x)dx = \lim_{t\to\infty}\int_{a}^{t}f(x)dx$|
|**8.1**|**Arc Length**|$L = \int_{a}^{b}\sqrt{1+[f'(x)]^{2}}dx$|
|**8.2**|**Surface Area**|$S = \int 2\pi y ds$ or $\int 2\pi x ds$|
|**9.2**|**Euler's Method**|$y_{n} = y_{n-1} + h \cdot f(x_{n-1}, y_{n-1})$|

---

### Practice Questions for You

1. **7.3 Challenge**: Evaluate $\int\frac{1}{x^{2}\sqrt{x^{2}+4}}dx$. (Recommendation: Use $x=2\tan\theta$).
2. **9.3 Mastery**: Solve the differential equation $\frac{dy}{dx} = xy$ with $y(0)=1$.
3. **7.8 Conceptual**: Does $\int_{1}^{\infty}\frac{1}{x^{2}}dx$ converge or diverge? Use the $p$-test rule.

_Please solve these and share your results for a check!_ I have created a tailored report and a quiz based on these materials to help you study. Both are now available in your studio tab.