import { formatAmount } from "./formatAmout";

test("should format 10000000", () => {
    // Given
    const baseAmount = "10000000";

    // When
    const result = formatAmount({ amount: baseAmount });

    // Then
    expect(result).toBe("10.00000");
});

test("should format 10000110", () => {
    // Given
    const baseAmount = "10000110";

    // When
    const result = formatAmount({ amount: baseAmount });

    // Then
    expect(result).toBe("10.00011");
});
