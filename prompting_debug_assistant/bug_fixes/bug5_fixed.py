import pandas as pd

def load_sales():
    """
    Clean sales, uplift EU by 20%, fix March, then sum revenue by region.
    """
    df = pd.DataFrame({
        "month": ["01", "02", "03", "04"],
        "revenue": ["100", "200", "x", "400"],
        "region": ["EU", "US", "EU", "APAC"],
    })
    df["revenue"] = pd.to_numeric(df["revenue"], errors="coerce").fillna(0)
    df.loc[df["region"] == "EU", "revenue"] *= 1.2
    df.loc[df["month"] == "03", "revenue"] = 999
    out = df.groupby("region", as_index=False)["revenue"].sum()
    return out

if __name__ == "__main__":
    print(load_sales())