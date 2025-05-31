def calculate_common_salary(month, working_days, advance, base_salary, overtime_hours):
    DAYS_IN_MONTH = {
        'january': 31, 'february': 28, 'march': 31, 'april': 30,
        'may': 31, 'june': 30, 'july': 31, 'august': 31,
        'september': 30, 'october': 31, 'november': 30, 'december': 31
    }

    month = month.lower()
    total_days = DAYS_IN_MONTH.get(month, 30)
    per_day_salary = base_salary / total_days
    per_hour_salary = per_day_salary / 8
    overtime_pay = overtime_hours * per_hour_salary

    if working_days == total_days:
        salary = base_salary + per_day_salary  # bonus for working on holiday
        holiday_bonus = per_day_salary
    elif working_days == total_days - 1:
        salary = base_salary  # full salary without holiday
        holiday_bonus = 0
    else:
        salary = per_day_salary * working_days  # pro-rated
        holiday_bonus = 0

    salary = salary + overtime_pay - advance

    return {
        "salary": round(salary, 2),
        "holidayBonus": round(holiday_bonus, 2),
        "advance": round(advance, 2),
        "overtimePay": round(overtime_pay, 2)
    }


def calculate_skilled(data):
    month = data.get('month', '')
    working_days = int(data.get('workingDays', 0))
    advance = float(data.get('advance', 0))
    base_salary = float(data.get('baseSalary', 15000))
    overtime_hours = float(data.get('overtimeHours', 0))

    salary_data = calculate_common_salary(month, working_days, advance, base_salary, overtime_hours)

    labour = float(data.get('totalLabour', 0))
    free = int(data.get('freeServices', 0))
    pdi = int(data.get('pdi', 0))
    fit = int(data.get('fittings', 0))
    wheel = int(data.get('wheelTurning', 0))
    hub = int(data.get('hubSetting', 0))
    tyre = int(data.get('tyreFitting', 0))

    incentive = 0
    if labour > 40000:
        incentive += (labour - 40000) * 0.18 + 10000 * 0.12 + 10000 * 0.08 + 20000 * 0.025
    elif labour > 30000:
        incentive += (labour - 30000) * 0.12 + 10000 * 0.08 + 20000 * 0.025
    elif labour > 20000:
        incentive += (labour - 20000) * 0.08 + 20000 * 0.025
    else:
        incentive += labour * 0.025

    service = free * 20 + pdi * 20 + fit * 20 + wheel * 30 + hub * 70 + tyre * 50
    total = incentive + service + salary_data["salary"]

    return {
        'labourIncentive': round(incentive, 2),
        'serviceIncentive': round(service, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }


def calculate_service_advisor(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 15000)),
        float(data.get('overtimeHours', 0))
    )

    labour = float(data.get('labour', 0))
    spare = float(data.get('spare', 0))
    gma = float(data.get('gma', 0))
    polish = int(data.get('polish', 0))
    teflon = int(data.get('teflon', 0))
    water_wash = int(data.get('waterWash', 0))
    wheel_tuning = int(data.get('wheelTuning', 0))
    buffing = int(data.get('buffing', 0))
    swing_arm = int(data.get('swingArmGreasing', 0))

    labour_incentive = labour * 0.01
    if spare <= 100000:
        spare_incentive = 0
    elif spare <= 200000:
        spare_incentive = spare * 0.005
    elif spare <= 300000:
        spare_incentive = spare * 0.0075
    else:
        spare_incentive = spare * 0.01

    service_incentive = (
        polish * 25 + teflon * 25 + water_wash * 10 +
        wheel_tuning * 20 + gma * 0.03 + buffing * 40
    )

    total = labour_incentive + spare_incentive + service_incentive + salary_data["salary"]

    return {
        'labourIncentive': round(labour_incentive, 2),
        'spareIncentive': round(spare_incentive, 2),
        'serviceIncentive': round(service_incentive, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }


def calculate_service_incharge(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 15000)),
        float(data.get('overtimeHours', 0))
    )

    labour = float(data.get('labour', 0))
    spare = float(data.get('spare', 0))
    gma = float(data.get('gma', 0))
    location = data.get('location', '').lower()
    cases = int(data.get('cases', 0))

    labour_incentive = labour * 0.012
    spare_incentive = spare * 0.002
    gma_incentive = gma * 0.01
    target_bonus = cases * 50 if location == 'thamarassery' and labour >= 500000 else 0

    total = labour_incentive + spare_incentive + gma_incentive + target_bonus + salary_data["salary"]

    return {
        'labourIncentive': round(labour_incentive, 2),
        'spareIncentive': round(spare_incentive, 2),
        'gmaIncentive': round(gma_incentive, 2),
        'targetBonus': round(target_bonus, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }


def calculate_spare_incharge(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 15000)),
        float(data.get('overtimeHours', 0))
    )

    counter_sale = float(data.get('counterSale', 0))
    spare_total = float(data.get('spareTotal', 0))
    location = data.get('location', '').lower()

    counter_incentive = counter_sale * 0.01
    fixed_bonus = 1000 if spare_total >= 1000000 else (500 if location == 'atholi' and spare_total >= 100000 else 0)

    total = counter_incentive + fixed_bonus + salary_data["salary"]

    return {
        'counterIncentive': round(counter_incentive, 2),
        'fixedBonus': fixed_bonus,
        'totalIncentive': round(total, 2),
        **salary_data
    }


def calculate_floor_manager(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 15000)),
        float(data.get('overtimeHours', 0))
    )

    labour = float(data.get('labour', 0))
    spare = float(data.get('spare', 0))

    labour_incentive = labour * 0.004
    spare_incentive = spare * 0.002
    total = labour_incentive + spare_incentive + salary_data["salary"]

    return {
        'labourIncentive': round(labour_incentive, 2),
        'spareIncentive': round(spare_incentive, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }


def calculate_warranty_manager(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 15000)),
        float(data.get('overtimeHours', 0))
    )

    warranty_labour = float(data.get('warrantyLabour', 0))
    pdi_jobs = int(data.get('pdi', 0))

    warranty_incentive = warranty_labour * 0.05
    pdi_incentive = pdi_jobs * 10
    total = warranty_incentive + pdi_incentive + salary_data["salary"]

    return {
        'warrantyIncentive': round(warranty_incentive, 2),
        'pdiIncentive': pdi_incentive,
        'totalIncentive': round(total, 2),
        **salary_data
    }


def calculate_incentive_by_category(category, data):
    if category == 'skilled_technician':
        return calculate_skilled(data)
    elif category == 'service_advisor':
        return calculate_service_advisor(data)
    elif category == 'service_incharge':
        return calculate_service_incharge(data)
    elif category == 'spare_incharge':
        return calculate_spare_incharge(data)
    elif category == 'floor_manager':
        return calculate_floor_manager(data)
    elif category == 'warranty_manager':
        return calculate_warranty_manager(data)
    else:
        raise ValueError('Unknown category')
