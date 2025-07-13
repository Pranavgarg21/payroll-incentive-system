def sanitize_data(data):
    cleaned = {}
    for key, value in data.items():
        if isinstance(value, str) and value.strip() == "":
            cleaned[key] = 0
        elif isinstance(value, str) and value.isdigit():
            cleaned[key] = int(value)
        else:
            try:
                cleaned[key] = float(value)
            except:
                cleaned[key] = value  # Leave booleans or strings like 'march'
    return cleaned



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

def calculate_service_manager_thamarassery(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 20000)),
        float(data.get('overtimeHours', 0))
    )
    labour = float(data.get('labour', 0))
    spare = float(data.get('spare', 0))
    gma = float(data.get('gma', 0))

    labour_incentive = labour * 0.012 if labour > 300000 else 0
    spare_incentive = spare * 0.002 if spare > 600000 else 0
    gma_incentive = gma * 0.01
    total = labour_incentive + spare_incentive + gma_incentive + salary_data["salary"]

    return {
        'labourIncentive': round(labour_incentive, 2),
        'spareIncentive': round(spare_incentive, 2),
        'gmaIncentive': round(gma_incentive, 2),
        'totalIncentive': round(total, 2),
        'incentive': round(total, 2),
        **salary_data
    }

def calculate_service_consultant_thamarassery(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 13000)),
        float(data.get('overtimeHours', 0))
    )
    polish = int(data.get('polish', 0))
    teflon = int(data.get('teflon', 0))
    water_wash = int(data.get('waterWash', 0))
    buffing = int(data.get('buffing', 0))
    swing = int(data.get('swingArmGreasing', 0))
    wheel = int(data.get('wheelTurning', 0))
    labour = float(data.get('labour', 0))
    spare = float(data.get('spare', 0))

    incentive = (
        labour * 0.01 + spare * 0.005 +
        polish * 25 + teflon * 25 + water_wash * 10 + buffing * 40 +
        swing * 30 + wheel * 25
    )
    total = incentive + salary_data["salary"]
    return {
        'incentiveBreakdown': round(incentive, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }

def calculate_sme_thamarassery(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 10000)),
        float(data.get('overtimeHours', 0))
    )
    labour = float(data.get('labour', 0))
    if labour > 750000:
        bonus = 2000
    elif labour > 500000:
        bonus = 1000
    elif labour > 300000:
        bonus = 500
    else:
        bonus = 0

    total = bonus + salary_data["salary"]
    return {
        'targetBonus': bonus,
        'totalIncentive': round(total, 2),
        **salary_data
    }

def calculate_technician_thamarassery(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 12000)),
        float(data.get('overtimeHours', 0))
    )

    labour = float(data.get('labour', 0))
    free = int(data.get('freeServices', 0))
    pdi = int(data.get('pdi', 0))
    fittings = int(data.get('fittings', 0))
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

    service = free * 20 + pdi * 20 + fittings * 20 + wheel * 30 + hub * 70 + tyre * 50
    total = incentive + service + salary_data["salary"]

    return {
        'labourIncentive': round(incentive, 2),
        'serviceIncentive': round(service, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }
def calculate_trainee_technician_thamarassery(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 6000)),
        float(data.get('overtimeHours', 0))
    )

    labour = float(data.get('labour', 0))
    free = int(data.get('freeServices', 0))
    pdi = int(data.get('pdi', 0))
    fittings = int(data.get('fittings', 0))
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

    service = free * 20 + pdi * 20 + fittings * 20 + wheel * 30 + hub * 70 + tyre * 50
    total = incentive + service + salary_data["salary"]

    return {
        'labourIncentive': round(incentive, 2),
        'serviceIncentive': round(service, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }
def calculate_spare_parts_manager_thamarassery(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 16000)),
        float(data.get('overtimeHours', 0))
    )

    spare = float(data.get('spare', 0))
    incentive = spare * 0.002 if spare >= 500000 else 0
    total = incentive + salary_data["salary"]

    return {
        'spareIncentive': round(incentive, 2),
        'totalIncentive': round(total, 2),
        **salary_data
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
        'incentive': round(total, 2),
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
def calculate_technician_atholi(data):
    return calculate_technician_thamarassery(data)  # reuse same logic

def calculate_sales_exec_atholi(data):
    salary_data = calculate_common_salary(
        data.get('month', ''), int(data.get('workingDays', 0)),
        float(data.get('advance', 0)), float(data.get('baseSalary', 10000)),
        float(data.get('overtimeHours', 0))
    )

    count = int(data.get('bikeCount', 0))
    tsy = data.get('tsyTargetAchieved', False)

    per_bike = 500 if tsy else 200
    incentive = count * per_bike
    total = incentive + salary_data["salary"]

    return {
        'retailIncentive': round(incentive, 2),
        'totalIncentive': round(total, 2),
        **salary_data
    }
def calculate_technician_engapuzha(data):
    return calculate_technician_thamarassery(data)

def calculate_sales_exec_engapuzha(data):
    salary_data = calculate_common_salary(
        data['month'], int(data['workingDays']), float(data['advance']),
        float(data['baseSalary']), float(data['overtimeHours'])
    )
    count = int(data.get('bikeCount', 0))
    rate = 500 if data.get('cltTargetAchieved') else 200
    incentive = count * rate
    return {
        'retailIncentive': incentive,
        'totalIncentive': incentive + salary_data["salary"],
        **salary_data
    }

def calculate_service_advisor_engapuzha(data):
    salary_data = calculate_common_salary(
        data['month'], int(data['workingDays']), float(data['advance']),
        float(data['baseSalary']), float(data['overtimeHours'])
    )
    labour = float(data['labour'])
    spare = float(data['spare'])
    amc = int(data.get('amcCount', 0)) * 20
    ew = int(data.get('ewRsa', 0)) * 100
    rsa = int(data.get('rsa', 0)) * 50
    special = int(data.get('specialAmc', 0)) * 53

    labour_incentive = 0.01 * labour if labour >= 50000 else 0
    spare_incentive = 0.01 * spare if spare >= 100000 else 0
    incentive = labour_incentive + spare_incentive + amc + ew + rsa + special

    return {
        'labourIncentive': labour_incentive,
        'spareIncentive': spare_incentive,
        'amc': amc + ew + rsa + special,
        'totalIncentive': round(incentive + salary_data["salary"], 2),
        **salary_data
    }
def calculate_sales_manager(data):
    bike_count = int(data.get("bikeRetail", 0))
    gma = float(data.get("gma", 0))
    gear = float(data.get("gear", 0))
    ew_rsa = float(data.get("ewRsa", 0))

    bikeIncentive = bike_count * 300
    gmaIncentive = gma * 0.03
    gearIncentive = gear * 0.05
    rsaIncentive = ew_rsa * 0.05

    # Reuse shared logic
    base = calculate_common(data)

    total = base['salary'] + base['overtimePay'] + base['holidayBonus'] + \
            bikeIncentive + gmaIncentive + gearIncentive + rsaIncentive

    return {
        **base,
        "bikeIncentive": round(bikeIncentive, 2),
        "gmaIncentive": round(gmaIncentive, 2),
        "gearIncentive": round(gearIncentive, 2),
        "rsaIncentive": round(rsaIncentive, 2),
        "totalIncentive": round(total, 2)
    }
def calculate_sales_exec(data):
    # Same structure as manager but possibly different slabs
    bike_count = int(data.get("bikeRetail", 0))
    gma = float(data.get("gma", 0))
    gear = float(data.get("gear", 0))
    ew_rsa = float(data.get("ewRsa", 0))

    bikeIncentive = bike_count * 250
    gmaIncentive = gma * 0.025
    gearIncentive = gear * 0.05
    rsaIncentive = ew_rsa * 0.05

    base = calculate_common(data)

    total = base['salary'] + base['overtimePay'] + base['holidayBonus'] + \
            bikeIncentive + gmaIncentive + gearIncentive + rsaIncentive

    return {
        **base,
        "bikeIncentive": round(bikeIncentive, 2),
        "gmaIncentive": round(gmaIncentive, 2),
        "gearIncentive": round(gearIncentive, 2),
        "rsaIncentive": round(rsaIncentive, 2),
        "totalIncentive": round(total, 2)
    }

def calculate_delivery_exec(data):
    cc_bike_count = int(data.get("ccBikeRetail", 0))
    gma = float(data.get("gma", 0))
    gear = float(data.get("gear", 0))
    ew_rsa = float(data.get("ewRsa", 0))

    bikeIncentive = cc_bike_count * 200
    gmaIncentive = gma * 0.02
    gearIncentive = gear * 0.04
    rsaIncentive = ew_rsa * 0.04

    base = calculate_common(data)

    total = base['salary'] + base['overtimePay'] + base['holidayBonus'] + \
            bikeIncentive + gmaIncentive + gearIncentive + rsaIncentive

    return {
        **base,
        "bikeIncentive": round(bikeIncentive, 2),
        "gmaIncentive": round(gmaIncentive, 2),
        "gearIncentive": round(gearIncentive, 2),
        "rsaIncentive": round(rsaIncentive, 2),
        "totalIncentive": round(total, 2)
    }
def calculate_cashier(data):
    try:
        registration_per_bike = int(data.get('registration_per_bike', 0))
        ew_rsa_value = int(data.get('ew_rsa_value', 0))
        bikes_registered = int(data.get('bikes_registered', 0))
        
        reg_amount = registration_per_bike * bikes_registered
        rsa_commission = 0.10 * ew_rsa_value  # 10% of RSA amount
        additional = 1000 if bikes_registered > 10 else 0

        return {'incentive': reg_amount + rsa_commission + additional}
    except Exception as e:
        return {'error': str(e)}
def calculate_sales_manager_thamarassery(data):
    bike_incentive = int(data["bikeRetail"]) * 250 if int(data["bikeRetail"]) > 0 else 0
    gma_bonus = float(data["gmaSale"]) * 0.01
    gear_bonus = float(data["gearSale"]) * 0.01
    ew_rsa = float(data["ewRsaAmount"])
    percent_retail = (int(data["totalVehicleRetail"]) / int(data["totalVehicleTarget"])) * 100

    if percent_retail < 50:
        ew_bonus = 0
    elif percent_retail < 75:
        ew_bonus = 0.25 * ew_rsa
    else:
        ew_bonus = ew_rsa

    return {"incentive": int(bike_incentive + gma_bonus + gear_bonus + ew_bonus)}

def calculate_sales_executive_thamarassery(data):
    return calculate_sales_manager_thamarassery(data)

def calculate_registration_executive_thamarassery(data):
    return {"incentive": 0}

def calculate_delivery_executive_thamarassery(data):
    delivery = int(data["vehicleDelivered"]) * 5
    pdi = int(data["pdiCount"]) * 10
    gma = int(data["gmaCount"]) * 20
    return {"incentive": delivery + pdi + gma}

def calculate_incentive_by_category(category, data):
    data = sanitize_data(data)

    if category == 'service_manager_thamarassery':
        return calculate_service_manager_thamarassery(data)
    elif category == 'service_consultant_thamarassery':
        return calculate_service_consultant_thamarassery(data)
    elif category == 'sme_thamarassery':
        return calculate_sme_thamarassery(data)
    elif category == 'skilled_technician':
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
    elif category == 'technician_thamarassery':
        return calculate_technician_thamarassery(data)
    elif category == 'trainee_technician_thamarassery':
        return calculate_trainee_technician_thamarassery(data)
    elif category == 'spare_parts_manager_thamarassery':
        return calculate_spare_parts_manager_thamarassery(data)
    elif category == 'technician_atholi':
        return calculate_technician_atholi(data)
    elif category == 'technician_engapuzha':
        return calculate_technician_engapuzha(data)
    elif category == 'sales_exec_engapuzha':
        return calculate_sales_exec_engapuzha(data)
    elif category == 'cashier':
        return calculate_cashier(data)
    elif category == 'service_advisor_engapuzha':
        return calculate_service_advisor_engapuzha(data)
    elif category == 'sales_exec_atholi':
        return calculate_sales_exec_atholi(data)  
    elif category == 'sales_manager':
        return calculate_sales_manager(data)
    elif category == 'sales_executive':
        return calculate_sales_exec(data)
    elif category == 'sales_manager_thamarassery':
        return calculate_sales_manager_thamarassery(data)
    elif category == 'sales_executive_thamarassery':
        return calculate_sales_executive_thamarassery(data)
    elif category == 'registration_executive_thamarassery':
        return calculate_registration_executive_thamarassery(data)
    elif category == 'delivery_executive_thamarassery':
        return calculate_delivery_executive_thamarassery(data)
    elif category == 'delivery_executive':
        return calculate_delivery_exec(data)
    else:
        raise ValueError('Unknown category')
